import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Appointment, Patient } from '../../types/SaludTools'
import { NydUser } from '../../types/NefrologiaYDialisis'


// Define a type for the slice state
interface UserState {
    /**
     * Saludtools Patient Profile information
     */
    saludToolsProfile?: Patient 

    nydProfile? : NydUser

    /**
     * Next 6 Appointments
     */
    nextAppointments?: Appointment[]
}

// Define the initial state using that type
const initialState: UserState = {
   saludToolsProfile: undefined,
   nydProfile: undefined,
   nextAppointments: undefined
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setSaludtoolsProfile: (state, action: PayloadAction<Patient>) => {
            state.saludToolsProfile = action.payload
        },
        setNydProfile: (state, action: PayloadAction<NydUser | undefined>) => {
            state.nydProfile = action.payload
        },
        setNextAppointments: (state, action: PayloadAction<Appointment[]>) => {
            state.nextAppointments = action.payload
        },

    },
})

export const {
   setSaludtoolsProfile,
   setNydProfile,
   setNextAppointments
} = userSlice.actions


export default userSlice.reducer