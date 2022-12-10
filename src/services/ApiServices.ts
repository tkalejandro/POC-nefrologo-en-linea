import { SaludToolsApiResponse } from "../types/Api"
import ApiError from "../types/Api/ApiError"


/**
 * Service that will talk to SaludTools controller..
 */
class ApiServices {
   
    // isSaludToolsApiError ( response : SaludToolsApiResponse | string) : ApiError | null {
    //     //SaludTools reponse with string when is not authorized.
    //     if(typeof(response) === 'string') {
    //         const newError : ApiError = {
    //             error: response,
    //             code: 401
    //         }

    //         return newError
    //     }

    //     //If is an error, we will transform this error to our ApiError
    //     const isErrorCode = response.code >= 400
    //     if(isErrorCode) {

    //         const {code, message} = response
    //         const newError : ApiError = {
    //             error: message,
    //             code
    //         }
    //         return newError
    //     }

    //     return null
    // }

}

export const apiServices = new ApiServices() 