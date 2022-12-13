import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Patient } from '../../types/SaludTools'


// Define a type for the slice state
interface UserState {
    saludToolsProfile?: Patient 
}

// Define the initial state using that type
const initialState: UserState = {
   saludToolsProfile: undefined
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setSaludtoolsProfile: (state, action: PayloadAction<Patient>) => {
            state.saludToolsProfile = action.payload
        }
    },
})

export const {
   setSaludtoolsProfile
} = userSlice.actions


export default userSlice.reducer