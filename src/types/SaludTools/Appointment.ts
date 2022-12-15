import { NefrologiaYDialisisAppointmentTypes } from "../../enums/NefrologiaYDialisisSas";
import { SaludToolsClinic, SaludToolsDocumentType, SaludToolsModality, SaludToolsNotificationState, SaludToolsStateAppointment } from "../../enums/SaludTools";

interface Appointment {
    /**
    * Id of Appointment. IF there is no number. Is not created yet.
    */
    id?: number

    /**
     * Starting Date and Time of appointment. yyyy-mm-dd HH:mm -> 2021-04-30 08:00
     */
    startAppointment: string

    /**
     * Ending Date and Time of appointment. yyyy-mm-dd HH:mm -> 2021-04-30 08:00
     */
    endAppointment: string

    /**
     * Document Type of patient.
     */
    patientDocumentType: SaludToolsDocumentType

    /**
     * Patient Identification.
     */
    patientDocumentNumber: string

    /**
     * Doctors document type.
     */
    doctorDocumentType: SaludToolsDocumentType

    /**
     * Doctor Identification
     */
    doctorDocumentNumber: string

    /**
     * Modality of the appointment.
     */
    modality: SaludToolsModality

    /**
     * State of the appointment.
     */
    stateAppointment: SaludToolsStateAppointment

    /**
     * State of the appointment by the patient.
     */
    notificationState: SaludToolsNotificationState

    /**
     * Appointment Type.
     */
    appointmentType: NefrologiaYDialisisAppointmentTypes

    /**
     * Clinic where the appointment wil be done.
     */
    clinic: SaludToolsClinic

    /**
     * Comments of the patient regarding the appointment.
     */
    comment?: string
}

export default Appointment