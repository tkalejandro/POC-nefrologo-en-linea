import { Patient } from ".";
import PaginationInformation from "./PaginationInformation";

/**
 * Search Body when api gives the response
 */
interface SearchPatientBody extends PaginationInformation {
    /**
     * List of Patients
     */
    content: Patient[]   
}

export default SearchPatientBody