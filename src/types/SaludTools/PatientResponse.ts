import { Patient } from ".";

/**
 * Same as Patient with extra properties
 */
interface PatientResponse extends Patient {
    /**
     * Id of Patient. Seems no use.
     */
    id: number

    /**
     * Seems no use.
     */
    pageable: null
}

export default PatientResponse