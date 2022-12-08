import {  Typography, Box } from '@mui/material'
import React from 'react'


//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const Welcome = () => {
  return (
    <Box sx={{ m: 2}}>
        <Typography variant="h6" component="h2" sx={{}}>
            Hello Yulia
        </Typography>
        <Typography>Welcomee to your dashboard</Typography>
    </Box>
  )
}

export default Welcome