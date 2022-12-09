import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { SearchAppointmentBody } from "../../../SaludTools";

interface SearchAppointmentReponse extends SaludToolsBaseApiResponse {

    /**
     * Body structure when searching for patients
     */
    body: SearchAppointmentBody
}

export default SearchAppointmentReponse