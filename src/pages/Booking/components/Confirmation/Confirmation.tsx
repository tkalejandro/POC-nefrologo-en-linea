import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../../../i18n/i18n.constants';
import { useAppSelector } from '../../../../redux/hooks';

interface ConfirmationProps {
  errorMessage?: string
}

/**
 * This component will let know the user that there was an answer. good or bad.
 * @returns 
 */
const Confirmation = ({ errorMessage }: ConfirmationProps): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.booking)
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')

  const userEmail = useAppSelector(state => state.user.saludToolsProfile?.email)
  const dateTime = useAppSelector(state => state.booking.bookingPreRequest?.startAppointment)

  useEffect(() => {
    if (dateTime == null) {
      return
    }

    const [onlyDate, onlyTime] = dateTime.split(" ")
    setDate(onlyDate)
    setTime(onlyTime)
  }, [])

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Appointment confirmation:</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        {
          errorMessage
            ? <Card sx={{ width: '100%', maxWidth: 365, m: 2 }}>
              <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
              >
                <ErrorIcon color="error" sx={{ fontSize: 150 }} />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                  {t("confirmation.errorMessage")}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {errorMessage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{t("confirmation.tryAgain")}</Button>
              </CardActions>
            </Card>
            : <Card sx={{ width: '100%', maxWidth: 365, m: 2, position: 'relative' }}>
              <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
              >
                <CheckCircleIcon color="success" sx={{ fontSize: 150 }} />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                  {t("confirmation.successMessage")}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {t("confirmation.successDescription", { email: userEmail, date, time })}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{t("confirmation.okay")}</Button>
              </CardActions>
            </Card>
        }
      </Box>
    </Box>

  )
}

export default Confirmation