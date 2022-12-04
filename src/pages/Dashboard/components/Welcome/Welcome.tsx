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
    <Box sx={ (theme) => ({boxShadow: 2, height: DashboardGridSizes.xs})}>
        <Typography variant="h4">
            Hello Yulia
        </Typography>
    </Box>
  )
}

export default Welcome