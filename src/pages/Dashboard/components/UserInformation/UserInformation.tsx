import { Box, useTheme, /* styled, Paper, */ Grid, useMediaQuery, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../../../i18n/i18n.constants';


const UserInformation = (): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.dashboard)
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ m: 2 }}>
            {t("userInformation.title")}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <AccountCircleIcon sx={{ fontSize: isMd ? 200 : 150, color: 'primary' }} />
                    <Typography mt={2} variant={isMd ? 'h4' : 'h5'}>
                        Trevor Phillips
                    </Typography>
                </Box>
                <Typography mt={4}>
                    {/* available currently hardcoded */}
                    {t("userInformation.appointments")}
                    <Typography ml={1} color='primary' variant='h5' component='span'>3</Typography>
                </Typography>
            </Box>
            <Grid container spacing={2} mt={4}>
                {/* User Profile Picture and name */}
                <Grid item xs={6} lg={6}>
                    <Typography textAlign="center">
                        {t("userInformation.age")}
                        <Typography ml={1} color='primary' variant='h5' component='span'>27</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={6}>
                    <Typography textAlign="center">
                        {t("userInformation.height")}
                        <Typography ml={1} color='primary' variant='h5' component='span'>177 cm</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserInformation