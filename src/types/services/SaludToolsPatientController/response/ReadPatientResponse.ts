import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { PatientReadBody } from "../../../SaludTools";

interface ReadPatientReponse extends SaludToolsBaseApiResponse {
    
    /**
     * Patient information with extra properties.
     */
    body: PatientReadBody 
}

export default ReadPatientReponse