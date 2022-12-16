import { Appointment } from "."
import PaginationInformation from "./PaginationInformation"

interface SearchAppointmentBody extends PaginationInformation {

    /**
     * List of appointments
     * 
     */
    content: Appointment[]
}

export default SearchAppointmentBody