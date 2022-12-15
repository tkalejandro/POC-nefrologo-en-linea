import { SaludToolsActionType,  SaludToolsEventType } from "../../../../enums/SaludTools"
import { SearchAppointment } from "../../../SaludTools"

interface SearchAppointmentRequest {

   /**
     * Type of event according SaludTools. Should be APPOINTMENT.
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be SEARCH.
     */
    actionType: SaludToolsActionType

    body: SearchAppointment
}

export default SearchAppointmentRequest