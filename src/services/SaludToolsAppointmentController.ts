import { SaludToolsApiRoutes } from "../constants"
import ApiError from "../types/Api/ApiError"
import { CreateAppointmentRequest } from "../types/services/SaludToolsAppointmentController/request"
import { CreateAppointmentResponse } from "../types/services/SaludToolsAppointmentController/response"
import { isApiError, isSaludToolsApiError } from "./ApiError"
import { ApiServices } from "./ApiServices"



/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsAppointmentController extends ApiServices {

    async createAppointment(createAppointmentRequest: CreateAppointmentRequest): Promise<CreateAppointmentResponse | ApiError> {
        try {
             
            const authorization =  await this.saludToolsAuthorization()
            
            if(isApiError(authorization)) return authorization

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

            const response: CreateAppointmentResponse = await request.json()
           
            const isError = isSaludToolsApiError(response)

            if (isError) {
                return isError
            }
           
            return response

        } catch (e ) {
            const error = e as Error
            const isError: ApiError = {
                error: error.message,
                code: 500
            }
            return isError
        }
    }

    readAppointment() {
        return 'Get Appoint'
    }

    updateAppointment() {
        return ' Update Appoint'
    }

    searchAppointments() {
        return 'Array of Appointments'
    }

    deleteAppointment() {
        return ' Delete Appointment'
    }
}

export const saludToolsAppointmentController = new SaludToolsAppointmentController()