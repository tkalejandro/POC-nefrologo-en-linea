import { SaludToolsApiRoutes } from "../constants"
import { SaludToolsActionType, SaludToolsDocumentType, SaludToolsEventType } from "../enums/SaludTools"
import { ApiError } from "../types/Api"
import { ReadPatientRequest } from "../types/services/SaludToolsPatientController/request"
import ReadPatientResponse from "../types/services/SaludToolsPatientController/response/ReadPatientResponse"
import { isApiError, isSaludToolsApiError } from "./ApiError"
import { ApiServices } from "./ApiServices"

/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsPatientController extends ApiServices{
   
    // createPatient () {
    //     return 'create Patient'
    // }

    async readPatient(documentNumber: string): Promise<ReadPatientResponse | ApiError> {
        try {

            const authorization = await this.saludToolsAuthorization()

            const createAppointmentRequest : ReadPatientRequest = {
                eventType: SaludToolsEventType.Patient,
                actionType: SaludToolsActionType.Read,
                body: {
                    // TO DO - Document Type is unflexible.
                    documentType: SaludToolsDocumentType.CedulaCiudadania,
                    documentNumber
                }
            }

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

            const response = await request.json() as ReadPatientResponse

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

    // updatePatient () {
    //     return ' Update Patient'
    // }

    // searchPatient () {
    //     return 'Array of Patient'
    // }
    
    // deletePatient () {
    //     return ' Delete Patient'
    // }

}

export const saludToolsPatientController = new SaludToolsPatientController() 