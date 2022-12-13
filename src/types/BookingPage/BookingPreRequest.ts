import { SaludToolsDocumentType, SaludToolsModality } from "../../enums/SaludTools";

interface BookingPreRequest {
      /**
      * Starting Date and Time of appointment. yyyy-mm-dd HH:mm -> 2021-04-30 08:00
      */
      startAppointment?: string

      /**
       * Ending Date and Time of appointment. yyyy-mm-dd HH:mm -> 2021-04-30 08:00
       */
      endAppointment?: string

      /**
      * Modality of the appointment.
      */
      modality?: SaludToolsModality

      /**
       * Doctors document type.
       */
      doctorDocumentType?: SaludToolsDocumentType

      /**
       * Doctor Identification
       */
      doctorDocumentNumber?: string
}

export default BookingPreRequest