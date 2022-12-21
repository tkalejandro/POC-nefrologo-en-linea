import { Box } from '@mui/material'
import React from 'react'
import { AccountStatus, MyInformation, MySubscriptions } from './components'

const AccountPage = () : JSX.Element => {
  return (
    <Box>
      <AccountStatus />
      <MyInformation />
      <MySubscriptions />
    </Box>
    
  )
}

export default AccountPage