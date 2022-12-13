import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { AppointmentReadBody } from "../../../SaludTools";

interface ReadAppointmentResponse extends SaludToolsBaseApiResponse {

    /**
     * Body strucutre when reading an appointment
     */
    body: AppointmentReadBody
}

export default ReadAppointmentResponse