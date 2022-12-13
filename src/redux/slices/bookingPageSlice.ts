import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SaludToolsDocumentType, SaludToolsModality } from '../../enums/SaludTools'
import { BookingPreRequest, StartingEndingDateTime } from '../../types/BookingPage'

// Define a type for the slice state
interface BookingState {
    /**
     * We use BookingPreRequest, to make sure all variable can be undefined. On submit we switch to Saludtools CreateAppointmentRequest.
     */
    bookingPreRequest?: BookingPreRequest
}

// Define the initial state using that type
const initialState: BookingState = {
    bookingPreRequest: undefined,
}

export const bookingPageSlice = createSlice({
    name: 'bookingPage',
    initialState,
    reducers: {
        selectDoctor: (state, action: PayloadAction<string>) => {
            if (state.bookingPreRequest == null) {
                const newBookingPreRequest: BookingPreRequest = {
                    doctorDocumentType: SaludToolsDocumentType.CedulaCiudadania,
                    doctorDocumentNumber: action.payload
                }

                state.bookingPreRequest = newBookingPreRequest
                return
            }
            state.bookingPreRequest.doctorDocumentType = SaludToolsDocumentType.CedulaCiudadania
            state.bookingPreRequest.doctorDocumentNumber = action.payload
        },
        selectDateTime: (state, action: PayloadAction<StartingEndingDateTime>) => {
            const {startTime, endTime} = action.payload
            if(state.bookingPreRequest == null){
                const newBookingPreRequest: BookingPreRequest = {
                    startAppointment: startTime,
                    endAppointment: endTime
                }
                state.bookingPreRequest = newBookingPreRequest
                return
            }
            state.bookingPreRequest.startAppointment = startTime
            state.bookingPreRequest.endAppointment = endTime
        },
        selectModality: (state, action: PayloadAction<SaludToolsModality>) => {
            if(state.bookingPreRequest == null) {
                const newBookingPreRequest : BookingPreRequest = {
                    modality: action.payload
                }
                state.bookingPreRequest = newBookingPreRequest
                return
            } 
            state.bookingPreRequest.modality = action.payload
        }
    },
})

export const {
    selectDoctor,
    selectDateTime,
    selectModality
} = bookingPageSlice.actions


export default bookingPageSlice.reducer