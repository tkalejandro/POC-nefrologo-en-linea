import { Box, useTheme, /* styled, Paper, */ Grid, useMediaQuery, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'



const UserInformation = (): JSX.Element => {

    const theme = useTheme()
    /* const Item = styled(Paper)({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }); */

    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ m: 2 }}>
            User information / Number of appointments left.
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
                    <AccountCircleIcon sx={{ fontSize: isMd ? 250 : 200, color: 'primary' }} />
                    <Typography mt={2} variant={isMd ? 'h3' : 'h4'}>
                        Trevor Phillips
                    </Typography>
                </Box>
                <Typography mt={4}>
                    {/* available currently hardcoded */}
                    <Typography color='primary' variant='h5' component='span'>3 </Typography>
                    appointments available
                </Typography>
            </Box>
            <Grid container spacing={2} mt={4}>
                {/* User Profile Picture and name */}
                <Grid item xs={6} lg={6}>
                    <Typography textAlign="center">
                        Age
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={6}>
                    <Typography textAlign="center">
                        Height
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserInformation