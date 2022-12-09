import { SaludToolsActionType,  SaludToolsEventType } from "../../../../enums/SaludTools";
import { FlexPatient } from "../../../SaludTools";


type SearchPatientRequest = {
    /**
     * Type of event according SaludTools
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be SEARCH.
     */
    actionType: SaludToolsActionType

    /**
     * 
     */
    body: FlexPatient

}

export default SearchPatientRequest