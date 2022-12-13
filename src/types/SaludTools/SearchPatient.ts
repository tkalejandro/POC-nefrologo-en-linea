import { SaludToolsDocumentType, SaludToolsEPS, SaludToolsGender } from "../../enums/SaludTools";

/**
 * Same as Patient, but all properties are not required. Useful for SEARCH.
 * The only required is pageable for the request.
 */
interface SearchPatient {
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
     * Birthday of user.
     */
    birthDate?: Date
    /**
     * Gender of user.
     */
    gender?: SaludToolsGender
    /**
     * User document Type.
     */
    documentType?: SaludToolsDocumentType 
    /**
     * User document Number.
     */
    documentNumber?: string
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
     * Type of insurance. In Colombia is called EPS.
     */
    eps?: SaludToolsEPS
    /**
     * The right to use the information.
     */
    habeasData?: boolean

    pageable: {
        /**
         * Starting page. Starting 0.
         */
        page: number
        /**
         * How many items per page
         */
        size: number
    }
}

export default SearchPatient