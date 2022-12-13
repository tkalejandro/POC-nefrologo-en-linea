import { NefrologiaYDialisisAppointmentTypes, TypesOfSpeciality } from "../../enums/NefrologiaYDialisisSas";

interface AppointmentCardInfo {
    /**
     * Id of card
     */
    id: number
    /**
     * Specialist type
     */
    specialist: TypesOfSpeciality
    /**
     * Appointment type, first time, control , general and /or online
     */
    appointment: NefrologiaYDialisisAppointmentTypes
    /**
     * Doctors name
     */
    doctor: string
    /**
     * Date
     */
    date: Date
    /**
     * Icon to show
     */
    icon?: JSX.Element
}

export default AppointmentCardInfo