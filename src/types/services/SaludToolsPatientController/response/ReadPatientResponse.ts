import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { PatientResponse } from "../../../SaludTools";

interface ReadPatientReponse extends SaludToolsBaseApiResponse {
    
    /**
     * Patient information with extra properties.
     */
    body: PatientResponse 
}

export default ReadPatientReponse