import {  Button, Typography, Box } from '@mui/material'
import React from 'react'
import { DashboardGridSizes } from '../../../../constants'

//RAFCE

/**
 * This widget will show a calendar and next appointments in order.
 * @returns 
 */
const AppointmentArea = () => {
  return (
    <Box sx={ (theme) => ({boxShadow: 2,  height: DashboardGridSizes.xxl})}>
        <Box>
            Im calendar area
        </Box>
       <Box>
           Im appointments card
       </Box>
    </Box>
  )
}

export default AppointmentArea