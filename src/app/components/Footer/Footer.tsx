import { Box, Paper, Theme, Typography } from '@mui/material'
import React from 'react'
import { NefrologiaYDialisisSasInfo } from '../../../constants';
import { Copyright, SocialMedia } from './components';

/**
 * Footer, it will show all connectio related to the company.
 * @returns 
 */
const Footer = () : JSX.Element => {
  const { address, phone, email } = NefrologiaYDialisisSasInfo
 
  return (
    <Paper elevation={2} sx={(theme : Theme) => ({
      py: 2,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      color: theme.palette.text.secondary
    })}>
      <SocialMedia />
      <Copyright />
      <Typography variant="caption">{address}</Typography>
      <Box>
        <Typography variant="caption">{phone}</Typography>
        {' '}
        <Typography variant="caption">{email}</Typography>
      </Box>
    </Paper>
  )
}

export default Footer