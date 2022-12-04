import { AppointmentReadBody } from "."
import PaginationInformation from "./PaginationInformation"

interface SearchAppointmentBody extends PaginationInformation {

    /**
     * List of appointments
     * 
     */
    content: AppointmentReadBody[]
}

export default SearchAppointmentBody