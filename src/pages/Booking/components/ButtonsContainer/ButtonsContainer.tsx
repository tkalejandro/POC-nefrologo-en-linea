import React from 'react'
import { Box, Button } from '@mui/material'

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
                        <Button onClick={handleNext}>
                            {almostFinish ? 'Finish' : 'Next'}
                        </Button>
                    </>
            }
        </Box>
    )
}

export default ButtonsContainer