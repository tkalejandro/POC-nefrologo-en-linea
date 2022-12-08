import { Box, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const NewAppointment = () => {
    return (
        <Box sx={(theme) => ({ height: '100%' })}>
            <Button
                component={Link}
                to="/booking"
                fullWidth
                color="primary"
                variant="contained"
                sx={{ height: '100%' }}
            >
                <AddIcon />
                {' '}
                New appointment
            </Button>
        </Box>
    )
}

export default NewAppointment