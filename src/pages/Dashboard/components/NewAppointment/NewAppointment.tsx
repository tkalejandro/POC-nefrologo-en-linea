import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import { DashboardGridSizes } from '../../../../constants'

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const NewAppointment = () => {
    return (

        <Button 
        color="secondary" 
        variant="contained"
        sx={(theme) => ({ boxShadow: 1, height: DashboardGridSizes.xs })}>
            you can always hover from the btn , or attribute to get help.
        </Button>

    )
}

export default NewAppointment