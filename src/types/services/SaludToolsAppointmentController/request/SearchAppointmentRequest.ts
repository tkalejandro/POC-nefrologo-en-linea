import { SaludToolsActionType,  SaludToolsClinic,  SaludToolsDocumentType, SaludToolsEventType, SaludToolsModality, SaludToolsNotificationState, SaludToolsStateAppointment } from "../../../../enums/SaludTools"
import { Pageable } from "../../../SaludTools"

type SearchAppointmentRequest = {

   /**
     * Type of event according SaludTools. Should be APPOINTMENT.
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be SEARCH.
     */
    actionType: SaludToolsActionType

    body: {
        pageable: {
            /**
             * Pages to show, the first one is 0. a.k.a offset
             */
            page: number

            /**
             * Quantity of appointments per page. a.ka. COUNT
             */
            size: number
        } 

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
}

export default SearchAppointmentRequest