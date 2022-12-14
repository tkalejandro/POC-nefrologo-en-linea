import { SaludToolsActionType,  SaludToolsClinic,  SaludToolsDocumentType, SaludToolsEventType, SaludToolsModality, SaludToolsNotificationState, SaludToolsStateAppointment } from "../../../../enums/SaludTools"

interface UpdateAppointmentRequest {

   /**
     * Type of event according SaludTools. Should be APPOINTMENT.
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be UPDATE.
     */
    actionType: SaludToolsActionType
    
    body: {

        /**
         * ID of appointment
         */
        id: string

        /**
         * Starting Date and Time of appointment.
         */
        startAppointment: Date

        /**
         * Ending Date and Time of appointment.
         */
        endAppointment: Date

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
        appointmentType: string

        /**
         * Clinic where the appointment wil be done.
         */
        clinic: SaludToolsClinic

        /**
         * Comments of the patient regarding the appointment.
         */
        comment?: string
    }
}

export default UpdateAppointmentRequest