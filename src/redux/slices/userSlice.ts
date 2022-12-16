import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Appointment, Patient } from '../../types/SaludTools'


// Define a type for the slice state
interface UserState {
    /**
     * Saludtools Patient Profile information
     */
    saludToolsProfile?: Patient 

    /**
     * Next 6 Appointments
     */
    nextAppointments?: Appointment[]
}

// Define the initial state using that type
const initialState: UserState = {
   saludToolsProfile: undefined,
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
        setNextAppointments: (state, action: PayloadAction<Appointment[]>) => {
            state.nextAppointments = action.payload
        },

    },
})

export const {
   setSaludtoolsProfile,
   setNextAppointments
} = userSlice.actions


export default userSlice.reducer