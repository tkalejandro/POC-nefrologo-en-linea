import SaludToolsBaseApiResponse from "../../../Api/SaludToolsBaseApiResponse";
import { Appointment } from "../../../SaludTools";

interface ReadAppointmentResponse extends SaludToolsBaseApiResponse {

    /**
     * Body strucutre when reading an appointment
     */
    body: Appointment
}

export default ReadAppointmentResponse