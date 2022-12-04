import {  PatientReadBody } from ".";
import PaginationInformation from "./PaginationInformation";

interface SearchPatientBody extends PaginationInformation {
    /**
     * List of Patients
     */
    content: PatientReadBody[]   
}

export default SearchPatientBody