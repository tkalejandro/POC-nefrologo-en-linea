import { Grid, Box, styled, Paper } from '@mui/material'
import React from 'react'
import { Welcome } from './components';

/**
 * Users Dashboard
 * @returns 
 */
const DashboardPage = () => {


  /**
   * The idea is to have a useful dashboard for the user.
   * The user wil be a person, who paid a subscription and can book a limited quantity of bookings depending of their account. 
   * The important in this Dashboard is the button to schedule an appointment (it will redirect to /bookings) and the Urgent Call, just a block with office number and office hours.
   * The urgent call is because, maybe there is not place available, but the user still want to contact the doctor. This number connects with the current scretary.
   * 
   * What other items should user see in the dAshboard?? No idea.
   * 
   * This bring opportunity to explore Material UI and bring block elements.
   * 
   * Make sure the components are save in the components "./"  . Follow the components strucure.
   * 
   * Material UI tips:  DIV are now BOX, P are now Typography. Each one has special properties, there is almost no need to write fontSizes colors, etc etc. Is all inbuilt and can be call in the component
   * 
   * MAYBE WE NEED TO EXPLORE COOL DASHBOARD IDEAS. Keep it simple to the GRID. The main goal is to understand MATERIAL UI.
   */

  //TEMPORARY CODE EACH GRID ITEM SHOULD BE ANY OTHER COMPONENT
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
          <Item>
            <Welcome />
          </Item>
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