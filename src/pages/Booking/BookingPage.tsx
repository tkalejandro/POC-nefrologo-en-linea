import { Box,Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NefrologiaYDialisisAppointmentTypes } from '../../enums/NefrologiaYDialisisSas';
import { SaludToolsActionType, SaludToolsClinic, SaludToolsEventType, SaludToolsNotificationState, SaludToolsStateAppointment } from '../../enums/SaludTools';
import { namespaces } from '../../i18n/i18n.constants';
import { useAppSelector } from '../../redux/hooks';
import { isApiError } from '../../services/ApiError';
import { saludToolsAppointmentController } from '../../services/SaludToolsAppointmentController';
import { NotificationMessage } from '../../types/App';
import { Appointment } from '../../types/SaludTools';
import { CreateAppointmentRequest } from '../../types/services/SaludToolsAppointmentController/request';
import { ButtonsContainer, Confirmation, SelectDoctor, SelectSchedule, SelectModality } from './components';

/**
 * Page where the user will be able to make an appointment
 * @returns 
 */
const BookingPage = (): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.booking)

  const [loading, setLoading] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [notification, setNotification] = useState<NotificationMessage | undefined>()

  /**
   * Steps of the process. This are translation paths.
   */
  const steps = [
    'steps.selectModality',
    'steps.selectDoctor',
    'steps.selectDateTime'
  ];

  const isStepOptional = (_step: number): boolean => {
    //return step === 1;
    return false
  };

  const isStepSkipped = (step: number): boolean => {
    return skipped.has(step);
  };

  const handleNext = (): void => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = (): void => {
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

  const handleReset = (): void => {
    setActiveStep(0);
  };

  /**
   * Function to render the component
   */
  const selectStepToRender = (step: number): JSX.Element | null => {
    if (step === steps.length) {
      //All steps have been completed.
      return <Confirmation notification={notification} />
    }

    switch (step) {
      case 0:
        return <SelectModality
          handleNext={handleNext}
        />
      case 1:
        return <SelectDoctor
          handleNext={handleNext}
        />
      case 2:
        return <SelectSchedule/>
      default:
        return null
    }
  }

  const bookingPreRequest = useAppSelector(state => state.booking.bookingPreRequest)
  const currentUserSaludToolsProfile = useAppSelector(state => state.user.saludToolsProfile)
  /**
   * Function that handle a creation of a new appointment
   * @returns 
   */
  const handleSubmit = async (event: { preventDefault: () => void; }): Promise<void> => {
    event.preventDefault()

    if (bookingPreRequest == null || currentUserSaludToolsProfile == null) {
      //If for some reason the user arrives to submit! which is impossible but you never know.
      return
    }
    setLoading(true)
    const { doctorDocumentNumber, doctorDocumentType, startAppointment, endAppointment, modality } = bookingPreRequest

    if (doctorDocumentNumber == null || doctorDocumentType == null || startAppointment == null || endAppointment == null || modality == null) {
      // TO DO - Error handling somehwere :-)
      setLoading(false)
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
      appointmentType: NefrologiaYDialisisAppointmentTypes.SubscriptionUser,
      clinic: SaludToolsClinic.NefrologiaYDialisisSas,
      comment: "This is a test"

    }
    const request: CreateAppointmentRequest = {
      eventType: SaludToolsEventType.Appointment,
      actionType: SaludToolsActionType.Create,
      body
    }

    const createAppointmentRequest = await saludToolsAppointmentController.createAppointment(request)
    console.log(createAppointmentRequest)
    if (isApiError(createAppointmentRequest)) {
      const { error } = createAppointmentRequest
      setNotification({
        type: 'error',
        message: error
      })
      handleNext()
      setLoading(false)
      return
    }
    //If success, we send the ID. The id will pass until the translation files.
    setNotification({ type: 'success', message: createAppointmentRequest?.id?.toString() ?? '' })
    handleNext()
    setLoading(false)
  }

  return (
    <Box sx={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>


      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">{t("optional")}</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{t(label)}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ display: 'flex' }}>
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
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </Box>
  )
}

export default BookingPage