import { ApiError, SaludToolsApiResponse } from "../../types/Api"


/**
 * Function that read a saludTools api response and check if is an error.
 * String is because SaludTools give string when is 401.
 * For positive or negative request, Saludtools use the same structure of response.
 * Therefore, we check is the error code is more than 400. And then transform it in our ApiError type.
 */
const isSaludToolsApiError = ( response : SaludToolsApiResponse | string) : ApiError | null => {
    //SaludTools reponse with string when is not authorized.
    if(typeof(response) === 'string') {
        const newError : ApiError = {
            error: response,
            code: 401
        }

        return newError
    }

    //If is an error, we will transform this error to our ApiError
    const isErrorCode = response.code >= 400
    if(isErrorCode) {

        const {code, message} = response
        const newError : ApiError = {
            error: message,
            code
        }
        return newError
    }

    return null
}

export default isSaludToolsApiError