import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { Patient } from "../../../SaludTools";

interface ReadPatientReponse extends SaludToolsBaseApiResponse {
    
    /**
     * Patient information with extra properties.
     */
    body: Patient 
}

export default ReadPatientReponse