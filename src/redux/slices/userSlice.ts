import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Patient } from '../../types/SaludTools'
import { currentPatient } from '../../assets/dummyData/currentPatient'


// Define a type for the slice state
interface UserState {
    saludToolsProfile?: Patient 
}

// Define the initial state using that type
const initialState: UserState = {
   saludToolsProfile: currentPatient
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      
    },
})

export const {
   
} = userSlice.actions


export default userSlice.reducer