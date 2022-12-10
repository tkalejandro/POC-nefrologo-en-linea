import ApiError from "../types/Api/ApiError"
import { CreateAppointmentRequest } from "../types/services/SaludToolsAppointmentController/request"
import { CreateAppointmentResponse } from "../types/services/SaludToolsAppointmentController/response"


/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsAppointmentController {

    async createAppointment(createAppointmentRequest: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        try {
            const data = JSON.stringify(createAppointmentRequest)
            const settings = {
                method: "POST",
                body: data,
            }
            const request = await fetch('https://saludtools.qa.carecloud.com.co/integration/sync/event/v1/', settings)

            const response: CreateAppointmentResponse = await request.json()

            return response

        } catch (e) {
            console.log(e)
            return e as CreateAppointmentResponse
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