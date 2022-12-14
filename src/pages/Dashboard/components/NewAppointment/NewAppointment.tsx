import { Box, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../Routes';
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../../../i18n/i18n.constants';

//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const NewAppointment = () : JSX.Element => {

    const { t } = useTranslation(namespaces.pages.dashboard)
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
               {t("newAppointment")}
            </Button>
        </Box>
    )
}

export default NewAppointment