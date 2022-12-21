/**
 * It gives us authentication information. When something was created / modified
 */
interface AuthData {
    /**
     * Who create it. Usually email.
     */
    createdBy: string

    /**
     * Who last modified it. Usually email.
     */
    lastmodifiedBy: string

    /**
     * When it was created. Date Time, UTC.
     */
    createdDateTime: Date

    /**
     * When it was last modified. Date Time, UTC.
     */
    lastModifiedDateTime: Date
}

export default AuthData