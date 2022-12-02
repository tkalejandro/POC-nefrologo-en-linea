import ApiError from "../types/Api/ApiError"


/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsAppointmentController {
    // async submitContactForm (form : ContactFormRequest) : Promise<ApiError | ContactFormResponse> {
    //     try {
    //         const data = JSON.stringify(form)
    //         const settings = {
    //             method: "POST",
    //             body: data,
    //         }

    //         const request = await fetch('api/contactPage/contactForm', settings)
        
    //         const response = await request.json()
            
    //         return response
    //     } catch (e) {
    //         return e as ApiError 
    //     }
    // }  

    createAppointment () {
        return 'create Appointment'
    }

    readAppointment () {
        return 'Get Appoint'
    }

    updateAppointment () {
        return ' Update Appoint'
    }

    searchAppointments () {
        return 'Array of Appointments'
    }
    
    deleteAppointment () {
        return ' Delete Appointment'
    }
}

export const saludToolsAppointmentController = new SaludToolsAppointmentController() 