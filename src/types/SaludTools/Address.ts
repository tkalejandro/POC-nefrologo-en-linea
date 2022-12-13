interface Address {
    /**
     * ID of the address
     */
    id: number

    /**
     * Main address of patient
     */
    mainAddress: string

    /**
     * Secondary address
     */
    secondaryAddress?: string

    /**
     * City ID
     */
    city: number

    /**
     * Are where the user lives
     */
    residenceZone?: string

    /**
     * Patient ID
     */
    patient: number
}

export default Address