import { Address } from ".";
import { SaludToolsDocumentType, SaludToolsEPS, SaludToolsGender } from "../../enums/SaludTools";

/**
 * Structure when we are Creating of Updating a Patient.
 */
interface Patient {
    /**
     * Id of patient. IF there is no number. Is not created yet.
     */
    id?: number
    /**
     * First name of user.
     */
    firstName?: string
    /**
     * Second name of user. In Latin American normally a user can have a second name.
     */
    secondName?: string
    /**
     * Last name of user.
     */
    firstLastName?: string
    /**
     * Second last name of user. In Latin American normally a user have a second last name.
     */
    secondLastName?: string
    /**
     * Birthday of user. 1991-10-02 yyyy-mm-dd
     */
    birthDate?: string
    /**
     * Gender of user.
     */
    gender?: SaludToolsGender
    /**
     * User document Type.
     */
    documentType: SaludToolsDocumentType 
    /**
     * User document Number.
     */
    documentNumber: string
    /**
     * Users Phone.
     */
    phone?: string
    /**
     * Users Mobile Phone.
     */
    cellPhone?: string
    /**
     * Users email.
     */
    email?: string
    /**
     * Address of patient
     */
    address?: Address
    /**
     * Type of insurance. In Colombia is called EPS.
     */
    eps?: SaludToolsEPS
    /**
     * The right to use the information.
     */
    habeasData?: boolean
}

export default Patient