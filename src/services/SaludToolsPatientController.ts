import ApiError from "../types/Api/ApiError"


/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsPatientController {
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

    createPatient () {
        return 'create Patient'
    }

    readPatient () {
        return 'Get Patient'
    }

    updatePatient () {
        return ' Update Patient'
    }

    searchPatient () {
        return 'Array of Patient'
    }
    
    deletePatient () {
        return ' Delete Patient'
    }

}

export const saludToolsPatientController = new SaludToolsPatientController() 