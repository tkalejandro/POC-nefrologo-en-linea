interface SaludToolsBaseApiResponse {
    /**
     * Id of Patient. SEEMS THERE IS NO USE.
     */
    id?: number

    /**
     * Code of the response from API.
     */
    code: number

    /**
     * The message from the response.
     */
    message: string

    /**
     * EventId. SEEMS THERE IS NO USE FOR US.
     */
    eventId: string
}

export default SaludToolsBaseApiResponse