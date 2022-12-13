import { SaludToolsActionType,  SaludToolsEventType } from "../../../../enums/SaludTools";
import { SearchPatient } from "../../../SaludTools";


interface SearchPatientRequest {
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
    body: SearchPatient

}

export default SearchPatientRequest