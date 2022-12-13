import { Box, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../Routes';

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const NewAppointment = () : JSX.Element => {
    return (
        <Box sx={{ height: '100%' }}>
            <Button
                component={Link}
                to={RoutesPath.booking}
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