import { AuthData, NydSubscription } from ".";
import { SaludToolsDocumentType, SaludToolsGender } from "../../enums/SaludTools";

interface NydUser extends AuthData {

    /**
     * GUID from MongoDB
     */
    id: string,

    /**
     * Document Type. Ex: National ID, passport etc.
     */
    documentType: SaludToolsDocumentType

    /**
     * Document number.
     */
    documentNumber: string

    /**
     * User first name.
     */
    firstName: string

    /**
     * User second name.
     */
    secondName?: string

    /**
     * User last name.
     */
    lastName: string

    /**
     * User second last name.
     */
    secondLastName?: string

    /**
     * User gender.
     */
    gender: SaludToolsGender

    /**
     * Birthday of user. 1991-10-02 yyyy-mm-dd
     */
    birthDate?: string

    /**
     * Email of user.
     */
    email: string

    /**
     * Country code. We need it for Whats App.
     */
    countryCode: number

    /**
     * User Mobile number. We need it for Wahts App.
     */
    mobile: number

    /**
     * User subscription information
     */
    subscription: NydSubscription

    /**
     * User its verified. Email exist.
     */
    userVerified: boolean

    /**
     * User has provided the minimum information required to use the service.
     */
    userEssentialInformation: boolean

    /**
     * The right to use the information.
     */
     habeasData: boolean

    /**
     * User last login
     */
    lastLogin: Date
}

export default NydUser