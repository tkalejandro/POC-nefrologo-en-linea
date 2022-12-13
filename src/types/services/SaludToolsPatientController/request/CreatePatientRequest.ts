import { SaludToolsActionType, SaludToolsEventType } from "../../../../enums/SaludTools";
import { Patient } from "../../../SaludTools";

interface CreatePatientRequest {
    /**
     * Type of event according SaludTools
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be CREATE.
     */
    actionType: SaludToolsActionType

    /**
     * Patient information
     */
    body: Patient

}

export default CreatePatientRequest