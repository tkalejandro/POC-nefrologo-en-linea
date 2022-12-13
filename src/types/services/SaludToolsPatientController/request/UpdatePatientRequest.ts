import { SaludToolsActionType, SaludToolsEventType } from "../../../../enums/SaludTools";
import { Patient } from "../../../SaludTools";

interface UpdatePatientRequest {
    /**
     * Type of event according SaludTools
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be UPDATE.
     */
    actionType: SaludToolsActionType

    /**
     * Patient information
     */
    body: Patient

}

export default UpdatePatientRequest