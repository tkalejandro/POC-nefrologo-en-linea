import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const Welcome = () => {
  return (
    <Box sx={ (theme) => ({boxShadow: 1, background: theme.palette.primary.main, height: 600})}>
        <Typography variant="h1">
            Hello Mrs Yulia
        </Typography>
    </Box>
  )
}

export default Welcome