import { ApiError } from "../../types/Api"

/**
 * Function to know if an ApiError Type.
 */
const isApiError = (apiError : unknown) : apiError is ApiError => {
    return (apiError as ApiError).error !== undefined
} 

export default isApiError
