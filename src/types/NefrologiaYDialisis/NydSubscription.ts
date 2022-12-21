import { AuthData } from ".";
import { TypeOfSubscriptions } from "../../enums/NefrologiaYDialisisSas";

/**
 * All information related to the subscription of a user.
 */
interface NydSubscription extends AuthData {
    /**
     * GUID from MongoDB
     */
    id: string

    /**
     * Subscription type
     */
    type: TypeOfSubscriptions

    /**
     * Number of appointments available to user
     */
    appointments: number
}

export default NydSubscription