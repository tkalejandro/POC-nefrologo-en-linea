import { SaludToolsActionType, SaludToolsEventType } from "../../../../enums/SaludTools"

type ReadAppointmentRequest = {

   /**
     * Type of event according SaludTools. Should be APPOINTMENT.
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be READ.
     */
    actionType: SaludToolsActionType
    
    body: {
        /**
         * Id of the appointment to search
         */
        id: string
    }
}

export default ReadAppointmentRequest