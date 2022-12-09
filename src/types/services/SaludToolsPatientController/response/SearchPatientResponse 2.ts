import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { SearchPatientBody } from "../../../SaludTools";

interface SearchPatientReponse extends SaludToolsBaseApiResponse {

    /**
     * Body structure when searching for patients
     */
    body: SearchPatientBody
}

export default SearchPatientReponse