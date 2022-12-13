/**
 * Service that will talk to SaludTools controller..
 */
class SaludToolsPatientController {
   
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