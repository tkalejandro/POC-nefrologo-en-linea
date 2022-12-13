import { Typography, Box, Divider } from '@mui/material'
import React from 'react'
import { NextAppointmentCard, UserCalendar } from './components'

//RAFCE

/**
 * This widget will show a calendar and next appointments in order.
 * @returns 
 */
const AppointmentArea = () : JSX.Element => {

  return (
    <Box sx={() => ({ height: '100%' })}>
      <UserCalendar />
      <Box sx={{ m: 2 }}>
        <Divider sx={{mb: 2}} />
        <Typography component="h2" variant="subtitle2">Next appointments</Typography>
        <NextAppointmentCard />
      </Box>
    </Box>
  )
}

export default AppointmentArea