import React from 'react'
import { Box, Button } from '@mui/material'
import { CreateAppointmentRequest } from '../../../../types/services/SaludToolsAppointmentController/request'
import { SaludToolsActionType, SaludToolsClinic, SaludToolsEventType, SaludToolsNotificationState, SaludToolsStateAppointment } from '../../../../enums/SaludTools'
import { saludToolsAppointmentController } from '../../../../services/SaludToolsAppointmentController'
import { isApiError } from '../../../../services/ApiError'
import { Appointment } from '../../../../types/SaludTools'
import { useAppSelector } from '../../../../redux/hooks'
import { NefrologiaYDialisisAppointmentTypes } from '../../../../enums/NefrologiaYDialisisSas'

interface ButtonsContainerProps {
    steps: string[]
    isStepOptional: (step: number) => boolean
    activeStep: number
    handleSkip: () => void
    handleBack: () => void
    handleNext: () => void
    handleReset: () => void

}

const ButtonsContainer = ({ steps, isStepOptional, activeStep, handleSkip, handleBack, handleNext, handleReset }: ButtonsContainerProps) => {

    const bookingPreRequest = useAppSelector(state => state.booking.bookingPreRequest)
    const currentUserSaludToolsProfile = useAppSelector(state => state.user.saludToolsProfile)
    /**
     * Function that handle a creation of a new appointment
     * @returns 
     */
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (bookingPreRequest == null || currentUserSaludToolsProfile == null) {
            return
        }

        const { doctorDocumentNumber, doctorDocumentType, startAppointment, endAppointment, modality } = bookingPreRequest

        if (doctorDocumentNumber == null || doctorDocumentType == null || startAppointment == null || endAppointment == null || modality == null) {
            return
        }

        const { documentType, documentNumber } = currentUserSaludToolsProfile
        const body: Appointment = {
            startAppointment,
            endAppointment,
            patientDocumentType: documentType,
            patientDocumentNumber: documentNumber,
            doctorDocumentType,
            doctorDocumentNumber,
            modality,
            stateAppointment: SaludToolsStateAppointment.InVirtualRoom,
            notificationState: SaludToolsNotificationState.Attend,
            appointmentType: NefrologiaYDialisisAppointmentTypes.ControlOnline,
            clinic: SaludToolsClinic.NefrologiaYDialisisSas,
            comment: "This is a test"

        }
        const request: CreateAppointmentRequest = {
            eventType: SaludToolsEventType.Appointment,
            actionType: SaludToolsActionType.Create,
            body
        }

        const createAppointmentRequest = await saludToolsAppointmentController.createAppointment(request)



        if (isApiError(createAppointmentRequest)) {
            const { code, error } = createAppointmentRequest
            console.log({ code, error })
            return
        }

        console.log(createAppointmentRequest)
    }


    const almostFinish = activeStep === steps.length - 1
    const stepsFinished = activeStep === steps.length
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {
                stepsFinished
                    ? <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flex: 1, pt: 2 }}>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                    : <>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={almostFinish ? handleSubmit : handleNext}>
                            {almostFinish ? 'Confirm' : 'Next'}
                        </Button>
                    </>
            }
        </Box>
    )
}

export default ButtonsContainer