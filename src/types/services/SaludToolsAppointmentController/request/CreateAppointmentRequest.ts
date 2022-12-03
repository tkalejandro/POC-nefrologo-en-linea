import { SaludToolsActionType, SaludToolsEventType } from "../../../../enums/SaludTools"
import Appointment from "../../../SaludTools/Appointment"

type CreateAppointmentRequest = {

   /**
     * Type of event according SaludTools. Should be APPOINTMENT.
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be CREATE.
     */
    actionType: SaludToolsActionType

    /**
     * Appointment base structure.
     */
    body: Appointment
}

export default CreateAppointmentRequest