import {  Button, Typography, Box } from '@mui/material'
import React from 'react'
import { DashboardGridSizes } from '../../../../constants'

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const Welcome = () => {
  return (
    <Box sx={ (theme) => ({ height: DashboardGridSizes.xs, ml: 2, mt: 2})}>
        <Typography variant="h6" component="h2" sx={{}}>
            Hello Yulia
        </Typography>
        <Typography>Welcomee to your dashboard</Typography>
    </Box>
  )
}

export default Welcome