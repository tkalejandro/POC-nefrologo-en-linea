import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FlexAppointment } from '../../types/SaludTools'
import { SaludToolsDocumentType } from '../../enums/SaludTools'


// Define a type for the slice state
interface BookingState {
    /**
     * We use FlexAppointment, to make sure all variable can be undefined. On submit we switch to the Saludtools CreateAppointmentRequest.
     */
    bookingPreRequest: FlexAppointment 
}

// Define the initial state using that type
const initialState: BookingState = {
    bookingPreRequest: {},
}

export const bookingPageSlice = createSlice({
    name: 'bookingPage',
    initialState,
    reducers: {
        selectDoctor: (state, action: PayloadAction<string>) => {
            
            state.bookingPreRequest.doctorDocumentType = SaludToolsDocumentType.CedulaCiudadania
            state.bookingPreRequest.doctorDocumentNumber = action.payload
        },
    },
})

export const {
  selectDoctor
} = bookingPageSlice.actions


export default bookingPageSlice.reducer