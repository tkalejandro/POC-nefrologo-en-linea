import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


// Define a type for the slice state
interface BookingState {
    value: number
}

// Define the initial state using that type
const initialState: BookingState = {
    value: 0,
}

export const bookingPageSlice = createSlice({
    name: 'bookingPage',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const {
    increment,
    decrement,
    incrementByAmount
} = bookingPageSlice.actions


export default bookingPageSlice.reducer