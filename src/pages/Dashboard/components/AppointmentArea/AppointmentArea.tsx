import { Typography, Box, Divider } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'
import { NextAppointmentCard, UserCalendar } from './components'

//RAFCE

/**
 * This widget will show a calendar and next appointments in order.
 * @returns 
 */
const AppointmentArea = () : JSX.Element => {

  const {t} = useTranslation(namespaces.pages.dashboard)
  return (
    <Box sx={() => ({ height: '100%' })}>
      <UserCalendar />
      <Box sx={{ m: 2 }}>
        <Divider sx={{mb: 2}} />
        <Typography component="h2" variant="subtitle2">{t("appointmentArea.nextAppointment.title")}</Typography>
        <NextAppointmentCard />
      </Box>
    </Box>
  )
}

export default AppointmentArea