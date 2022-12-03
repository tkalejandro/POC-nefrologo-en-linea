import { Appointment } from ".";


/**
 * Same as Patient with extra properties. Used in the body response when reading patient
 */
interface AppointmentReadBody extends Appointment {
    /**
     * Id of Patient. Seems no use.
     */
    id: number

    /**
     * Seems no use.
     */
    pageable: null
}

export default AppointmentReadBody