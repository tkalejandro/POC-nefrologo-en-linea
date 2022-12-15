import React from 'react'
import { Box, Button, LinearProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'

interface ButtonsContainerProps {
    loading: boolean
    steps: string[]
    isStepOptional: (step: number) => boolean
    activeStep: number
    handleSkip: () => void
    handleBack: () => void
    handleNext: () => void
    handleReset: () => void
    handleSubmit: (event: { preventDefault: () => void; }) => Promise<void>
}

const ButtonsContainer = ({ steps, isStepOptional, activeStep, handleSkip, handleBack, handleNext, handleReset, handleSubmit, loading}: ButtonsContainerProps): JSX.Element => {

    const { t } = useTranslation([namespaces.pages.booking])
    const almostFinish = activeStep === steps.length - 1
    const stepsFinished = activeStep === steps.length
    return (
        <Box>

          
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
                                {t("buttonsContainer.back")}
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    {t("buttonsContainer.skip")}
                                </Button>
                            )}
                            <Button onClick={almostFinish ? handleSubmit : handleNext}>
                                {t(almostFinish ? 'buttonsContainer.confirm' : 'buttonsContainer.next')}
                            </Button>
                        </>
                }
            </Box>
            {
                loading &&  <LinearProgress color="secondary" />
            }
        </Box>
    )
}

export default ButtonsContainer