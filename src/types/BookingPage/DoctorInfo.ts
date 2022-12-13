import { TypesOfSpeciality } from "../../enums/NefrologiaYDialisisSas";

interface DoctorInfo {
    /**
     * Will be the Colombian identification number.  Cedula or any other.
     */
    id: string
    /**
     * First name.
     */
    firstName: string
    /**
     * Second Name. it might have a third.
     */
    secondName?: string
    /**
     * Last name.
     */
    firstLastName: string
    /**
     * Second last name,
     */
    secondLastName?: string
    /**
     * Specialist of the doctor
     */
    specialist: TypesOfSpeciality
    /**
     * Route of the image. Normally found inside src/assets/*
     */
    localImage: string
}

export default DoctorInfo