import { Pageable, PatientResponse, Sort } from ".";

type SearchPatientBody = {
    /**
     * List of Patients
     */
    content: PatientResponse[]

    /**
     * Pagination information.
     */
    pageable: Pageable

    /**
     * Total Pages
     */
    totalPages: number

    /**
     * Total elements
     */
    totalElements: number

    /**
     * Is the last page?
     */
    last: boolean

    /**
     * Sort properties
     */
    sort: Sort

    /**
     * Whats dif with totalElements?
     */
    numberOfElements: number

    /**
     * Is first page?
     */
    first: boolean

    /**
     * Size??
     */
    size: number

    /**
     * Number??
     */
    number: number

    /**
     * Whats empty?
     */
    emtpy: boolean
}

export default SearchPatientBody