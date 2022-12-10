import ApiError from "../types/Api/ApiError"
import { CreateAppointmentRequest } from "../types/services/SaludToolsAppointmentController/request"
import { CreateAppointmentResponse } from "../types/services/SaludToolsAppointmentController/response"
import { isSaludToolsApiError } from "./ApiError"



/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsAppointmentController {

    async createAppointment(createAppointmentRequest: CreateAppointmentRequest): Promise<CreateAppointmentResponse | ApiError> {
        try {
            const data = JSON.stringify(createAppointmentRequest)
            const settings = {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const request = await fetch('https://saludtools.carecloud.com.co/integration/sync/event/v1/', settings)

            const response: CreateAppointmentResponse = await request.json()

            const isError = isSaludToolsApiError(response)

            if (isError) {
                return isError
            }

            console.log("the response", response)
            return response

        } catch (e) {

            const isError: ApiError = {
                error: e as string,
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