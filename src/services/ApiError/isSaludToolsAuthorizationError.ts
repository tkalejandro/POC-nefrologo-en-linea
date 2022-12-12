import { SaludToolsAuthorizationError } from "../../types/Api"

/**
 * Function to know if an ApiError Type.
 */
const isSaludToolsAuthorizationError = (saludToolsAuthorizationError : unknown) : saludToolsAuthorizationError is SaludToolsAuthorizationError => {
    return (saludToolsAuthorizationError as SaludToolsAuthorizationError).error !== undefined
} 

export default isSaludToolsAuthorizationError
