import { Grid, Box, styled, Paper } from '@mui/material'
import React from 'react'

const DashboardPage = () => {

  //TEMPORARY CODE EACH GRID ITEM SHOULD BE A COMPONENT
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Item> Hello user</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item> schedule an appointment</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Number of appointments left.</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item> Doctors tips</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item> urgent call</Item>
        </Grid>
        <Grid item xs={12}>
          <Item> Data</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardPage