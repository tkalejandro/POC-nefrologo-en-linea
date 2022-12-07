import { Box, Button } from '@mui/material'
import React from 'react'
import { DashboardGridSizes } from '../../../../constants'
import AddIcon from '@mui/icons-material/Add';

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const NewAppointment = () => {
    return (
        <Box   sx={(theme) => ({height: DashboardGridSizes.xs, })}>
        <Button
            fullWidth
            color="primary"
            variant="contained"
            sx={{height: '100%'}}
          >
            <AddIcon />
            {' '}
            New appointment
        </Button>
        </Box>

    )
}

export default NewAppointment