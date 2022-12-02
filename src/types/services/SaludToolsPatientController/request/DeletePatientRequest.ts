import { SaludToolsActionType, SaludToolsDocumentType, SaludToolsEventType } from "../../../../enums/SaludTools";

type DeletePatientRequest = {
    /**
     * Type of event according SaludTools
     */
    eventType: SaludToolsEventType

    /**
     * Action of event according Saludtools.  Should be DELETE.
     */
    actionType: SaludToolsActionType

    body: {
        /**
        * Type of users Document
        */
        documentType: SaludToolsDocumentType
        /**
         * Document Identification.
         */
        documentNumber: string
    }

}

export default DeletePatientRequest