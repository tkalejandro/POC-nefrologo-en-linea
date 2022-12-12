import { SaludToolsApiRoutes } from "../constants"
import { SaludToolsAuthorizationError } from "../types/Api"
import ApiError from "../types/Api/ApiError"
import { SaludToolsAuthorizationRequest } from "../types/services/ApiServices/request"
import { SaludToolsAuthorizationResponse } from "../types/services/ApiServices/response"
import { isSaludToolsAuthorizationError } from "./ApiError"


/**
 * Service that will talk to SaludTools controller..
 */
export class ApiServices {
   
    // In the future here we will handle all GET , POST , PUT, DELETE , PATCH. 

    /**
     * Function to get Authorization to use SaludTools.
     * @returns Authorization token
     */
    async saludToolsAuthorization(): Promise<string | ApiError | void> {
        try {
            const {REACT_APP_SALUDTOOLS_KEY, REACT_APP_SALUDTOOLS_SECRET} = process.env

            if(REACT_APP_SALUDTOOLS_KEY == null || REACT_APP_SALUDTOOLS_SECRET == null) {
                return
            }

            const authorization : SaludToolsAuthorizationRequest = {
                key: REACT_APP_SALUDTOOLS_KEY,
                secret: REACT_APP_SALUDTOOLS_SECRET,
            } 

            const settings = {
                method: "POST",
                body: JSON.stringify(authorization),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const request = await fetch(SaludToolsApiRoutes.authorization, settings)

            const response: SaludToolsAuthorizationResponse | SaludToolsAuthorizationError = await request.json()

            if (isSaludToolsAuthorizationError(response)) {
                const {error, status} = response
                const newError : ApiError ={
                    code: status,
                    error,
                }
                return newError
            }

            const {access_token} = response

            return `Bearer ${access_token}`

        } catch (e ) {
            const error = e as Error
            const isError: ApiError = {
                error: error.message,
                code: 500
            }
            return isError
        }
    }
}