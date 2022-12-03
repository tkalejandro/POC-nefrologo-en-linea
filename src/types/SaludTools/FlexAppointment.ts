import { SaludToolsClinic, SaludToolsDocumentType, SaludToolsModality, SaludToolsNotificationState, SaludToolsStateAppointment } from "../../enums/SaludTools";

/**
 * Same as Appointment, but all properties are not required. Useful for SEARCH
 */
type FlexAppointment = {

    /**
     * Id of the appointment.
     */
    id?: string

    /**
     * Starting Date and Time of appointment.
     */
    startAppointment?: Date

    /**
     * Ending Date and Time of appointment.
     */
    endAppointment?: Date

    /**
     * Document Type of patient.
     */
    patientDocumentType?: SaludToolsDocumentType

    /**
     * Patient Identification.
     */
    patientDocumentNumber?: string

    /**
     * Doctors document type.
     */
    doctorDocumentType?: SaludToolsDocumentType

    /**
     * Doctor Identification
     */
    doctorDocumentNumber?: string

    /**
     * Modality of the appointment.
     */
    modality?: SaludToolsModality

    /**
     * State of the appointment.
     */
    stateAppointment?: SaludToolsStateAppointment

    /**
     * State of the appointment by the patient.
     */
    notificationState?: SaludToolsNotificationState

    /**
     * Appointment Type.
     */
    appointmentType?: string

    /**
     * Clinic where the appointment wil be done.
     */
    clinic?: SaludToolsClinic

    /**
     * Comments of the patient regarding the appointment.
     */
    comment?: string
}

export default FlexAppointment