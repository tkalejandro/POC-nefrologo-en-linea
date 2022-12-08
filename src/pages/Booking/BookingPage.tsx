import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { ButtonsContainer, Confirmation, PatientInfo, SelectDoctor, SelectSchedule } from './components';

/**
 * Page where the user will be able to make an appointment
 * @returns 
 */
const BookingPage = () => {
  /**
   * Third Step is to take the patiences Data.  You will need to create the inputs (Material UI - Textfield)
   * 
   * NOTE3: Use Dummy Data, dont think about Backend, practice Material UI ONLY
   * NOTE4: Avoid using raw HTML.   only BOX (div) or TYPOGRAPHY (p) . All Elements have a special inline styling.  sx={{mt: 1, marginTop: 1 // both the same}} 
   */

  const [activeStep, setActiveStep] = useState<number>(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const steps = ['Select Doctor', 'Select Time', 'Your Information'];

  const isStepOptional = (step: number) => {
    //return step === 1;
    return false
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  /**
   * Function to render the component
   */
  const selectStepToRender = (step: number): JSX.Element | null => {
    if (step === steps.length) {
      //All steps have been completed.
      return <Confirmation />
    }

    switch (step) {
      case 0:
        return <SelectDoctor 
        handleNext={handleNext}
        />
      case 1:
        return <SelectSchedule />
      case 2:
        return <PatientInfo />
      default:
        return null
    }
  }

  const bookingPreRequest = useAppSelector(state => state.booking.bookingPreRequest)

  console.log(bookingPreRequest)

  return (
    <Box sx={{ width: '100%', minHeight: '80vh', display: 'flex' , flexDirection: 'column'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{flex:1, display: 'flex'}}>
        {selectStepToRender(activeStep)}
      </Box>

      <ButtonsContainer
        steps={steps}
        activeStep={activeStep}
        isStepOptional={isStepOptional}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSkip={handleSkip}
        handleReset={handleReset}
      />
    </Box>
  )
}

export default BookingPage