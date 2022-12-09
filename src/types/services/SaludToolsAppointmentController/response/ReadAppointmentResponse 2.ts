import { SaludToolsClinic, SaludToolsDocumentType, SaludToolsModality, SaludToolsNotificationState, SaludToolsStateAppointment } from "../../../../enums/SaludTools";
import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { AppointmentReadBody, Pageable } from "../../../SaludTools";

interface ReadAppointmentResponse extends SaludToolsBaseApiResponse {

    /**
     * Body strucutre when reading an appointment
     */
    body: AppointmentReadBody
}

export default ReadAppointmentResponse