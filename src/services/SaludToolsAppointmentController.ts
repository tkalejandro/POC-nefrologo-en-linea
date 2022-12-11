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
                    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgyLXNlcnZlciJdLCJleHAiOjE2NzA4MTU5NjksInVzZXJfbmFtZSI6IlNUQUtPQTNMMVZ1SzZqRkNHTFBFSG1GZkpsTFc0OCIsImp0aSI6ImZhNzc0OWM5LTEwNTUtNGJiZi1iZWUyLWMxZDFkMzUwYjg4MyIsImNsaWVudF9pZCI6Ik5FRlJPTE9HSUFZRElBTElTSVNTQVNfQ09NUEFOWSIsInNjb3BlIjpbInJvbGVfYWRtaW4iLCJyb2xlX3N1cGVyYWRtaW4iXX0.KKaWijnbsG4kvNGRICHUmHNaKea5jAeVU_K48qeXBLM64Cmk3ioZa-2cCzBPWiWGzjM1JQIysj1juWxlgTGn21umGMRcHHE0meQx-gi3t5HzdVc5iY0BQBOjTExDF4kNQXlQ1z9z8VVTlnPbhzGE5GxgShYqNScsqpehxOKYPeFiL-Le7T5JpflspjFfpjt_BUyG84mQUo3meKpCwLxRpzVH3kXWfnTi-Tb3YtJTlgcNCdm5uNpd0P0mmBpw0fQdOHsEKV-sZVhdVBwIywZ4YvoZS9uQIZG3j1FN7ZAlGHqQDXyLrfDBt3KLKEacl_9jD9SxUtsKCrP9N9m3QfHp0g"
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