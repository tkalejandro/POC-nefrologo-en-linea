import {  Button, Typography, Box } from '@mui/material'
import React from 'react'

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const Welcome = () => {
  return (
    <Box sx={ (theme) => ({boxShadow: 1, backgroundColor: theme.palette.secondary.main, height: 600})}>
        <Typography variant="h1">
            Hello Yulia
        </Typography>
        <Button color="primary" variant="outlined">
          you can always hover from the btn , or attribute to get help. 
        </Button>
    </Box>
  )
}

export default Welcome