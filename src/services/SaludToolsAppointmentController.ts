import dayjs from "dayjs"
import { SaludToolsApiRoutes } from "../constants"
import { SaludToolsActionType, SaludToolsClinic, SaludToolsDocumentType, SaludToolsEventType } from "../enums/SaludTools"
import ApiError from "../types/Api/ApiError"
import { CreateAppointmentRequest, DeleteAppointmentRequest, SearchAppointmentRequest } from "../types/services/SaludToolsAppointmentController/request"
import { CreateAppointmentResponse, DeleteAppointmentResponse } from "../types/services/SaludToolsAppointmentController/response"
import SearchAppointmentResponse from "../types/services/SaludToolsAppointmentController/response/SearchAppointmentResponse"
import { isApiError, isSaludToolsApiError } from "./ApiError"
import { ApiServices } from "./ApiServices"



/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsAppointmentController extends ApiServices {

    async createAppointment(createAppointmentRequest: CreateAppointmentRequest): Promise<CreateAppointmentResponse | ApiError> {
        try {

            const authorization = await this.saludToolsAuthorization()

            if (isApiError(authorization)) return authorization

            const data = JSON.stringify(createAppointmentRequest)
            const settings = {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${authorization}`
                },
            }
            const request = await fetch(SaludToolsApiRoutes.integration, settings)

            const response = await request.json() as CreateAppointmentResponse

            const isError = isSaludToolsApiError(response)

            if (isError) {
                return isError
            }

            return response

        } catch (e) {
            const error = e as Error
            const isError: ApiError = {
                error: error.message,
                code: 500
            }
            return isError
        }
    }

    // readAppointment() {
    //     return 'Get Appoint'
    // }

    // updateAppointment() {
    //     return ' Update Appoint'
    // }

    /**
     * Function to searchAppointments using Patients info
     * @param documentId Patient Document Number
     * @param documentType Patient Document Type
     * @returns 
     */
    async searchAppointmentByDocumentId(documentId: string, documentType: SaludToolsDocumentType): Promise<SearchAppointmentResponse | ApiError> {
        try {

            const authorization = await this.saludToolsAuthorization()

            if (isApiError(authorization)) return authorization

            const today = dayjs()
            const startAppointment = today.format('YYYY-MM-DD')
            const endAppointment = today.add(6, 'month').format('YYYY-MM-DD')

            const preRequest : SearchAppointmentRequest = {
                eventType: SaludToolsEventType.Appointment,
                actionType: SaludToolsActionType.Search,
                body: {
                    startAppointment,
                    endAppointment,
                    clinic:  SaludToolsClinic.NefrologiaYDialisisSas,
                    patientDocumentType: documentType,
                    patientDocumentNumber: documentId,
                    pageable: {
                        page: 0,
                        // TO DO - Can SaludTools organize this by Date themselves?
                        size: 20
                    }
                }
            }
            const data = JSON.stringify(preRequest)
            const settings = {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${authorization}`
                },
            }
            const request = await fetch(SaludToolsApiRoutes.integration, settings)

            const response = await request.json() as SearchAppointmentResponse

            const isError = isSaludToolsApiError(response)

            if (isError) {
                return isError
            }

            return response

        } catch (e) {
            const error = e as Error
            const isError: ApiError = {
                error: error.message,
                code: 500
            }
            return isError
        }
    }

    async deleteAppointmentById(appointmentId: string): Promise<DeleteAppointmentResponse | ApiError> {
        try {

            const authorization = await this.saludToolsAuthorization()

            if (isApiError(authorization)) return authorization

            const preRequest: DeleteAppointmentRequest = {
                eventType: SaludToolsEventType.Appointment,
                actionType: SaludToolsActionType.Delete,
                body: {
                    id: appointmentId
                }
            }
            const data = JSON.stringify(preRequest)
            const settings = {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${authorization}`
                },
            }
            const request = await fetch(SaludToolsApiRoutes.integration, settings)

            const response = await request.json() as DeleteAppointmentResponse

            const isError = isSaludToolsApiError(response)

            if (isError) {
                return isError
            }

            return response

        } catch (e) {
            const error = e as Error
            const isError: ApiError = {
                error: error.message,
                code: 500
            }
            return isError
        }
    }
}

export const saludToolsAppointmentController = new SaludToolsAppointmentController()