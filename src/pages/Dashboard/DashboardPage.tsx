import {  Box, styled, Paper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { AppointmentArea, NewAppointment, UrgentCommunication, Welcome, UserInformation } from './components';

/**
 * Users Dashboard
 * @returns 
 */
const DashboardPage = () : JSX.Element => {

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
   * Noramlly you can target the colors primary , secondary directly (will have contrast text automatically) or targeting via theme.palette.primary...  you can find the dark light and contrast text version
   * 
   * MAYBE WE NEED TO EXPLORE COOL DASHBOARD IDEAS. Keep it simple to the GRID. The main goal is to understand MATERIAL UI.
   * 
   * We could use FREE SVGs
   */

  const theme = useTheme()

  /**
   * Item Component.
   */
  const Item = styled(Paper)({
    // This will give the color to all texts inside components
    color: theme.palette.text.secondary,
    //margin: spacing,
    // This is the color for titles for each widget. Make sure is h2
    '& h2': {
      color: theme.palette.primary.main
    },
    '& h3': {
      color: theme.palette.primary.light
    },
  });

  /**
   * Function to repeat string information inside the grid area
   */
  const repeatStr = (str : string, num : number) : string => {
    if(num < 0) {
      return ""
    } else if (num === 1) {
      return `${str} `
    } else {
        let repeatedStr = ""
        while(num > 0) {
          repeatedStr += `${str} `
          num--
        }
        return repeatedStr;
    }
  }

  const gridAreaLg = `"${repeatStr("wl", 9)} ${repeatStr("na", 3)}"
                      "${repeatStr("ui", 5)} ${repeatStr("uc", 4)} ${repeatStr("aa", 3)}"
                      "${repeatStr("ui", 5)} ${repeatStr("dt", 4)} ${repeatStr("aa", 3)}"
                      "${repeatStr("da", 9)} ${repeatStr("aa", 3)}"`

  const gridAreaMd = `"${repeatStr("wl", 8)} ${repeatStr("na", 4)}"
                      "${repeatStr("ui", 5)} ${repeatStr("uc", 3)} ${repeatStr("aa", 4)}"
                      "${repeatStr("ui", 5)} ${repeatStr("dt", 3)} ${repeatStr("aa", 4)}"
                      "${repeatStr("da", 8)} ${repeatStr("aa", 4)}"`

  const gridAreaSm = `"${repeatStr("wl", 12)}"
                      "${repeatStr("na", 12)}"
                      "${repeatStr("aa", 12)}"
                      "${repeatStr("ui", 12)}"
                      "${repeatStr("uc", 12)}"
                      "${repeatStr("dt", 12)}"
                      "${repeatStr("da", 12)}"`

  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  /**
   * Function to choose the grid layout.
   * We are using vanilla grid and not material UI grid because the complexity of this GRID.
   * This is a special case.
   */
  const gridAreaToUse = (): string => {
    if (isLg) {
      return gridAreaLg
    } else if (isMd) {
      return gridAreaMd
    } else {
      return gridAreaSm
    }
  }


  return (
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3,
        gridTemplateRows: 'auto',
        gridTemplateAreas: gridAreaToUse(),
      }}>
        <Item sx={{ gridArea: 'wl' }}>
          <Welcome />
        </Item>
        <Item sx={{ gridArea: 'na' }}>
          <NewAppointment />
        </Item>
        <Item sx={{ gridArea: 'aa' }}>
          <AppointmentArea />
        </Item>
        <Item sx={{ gridArea: 'ui' }}>
 
          <UserInformation />

        </Item>
        <Item sx={{ gridArea: 'uc' }}>
          <UrgentCommunication />
        </Item>
        <Item sx={{ gridArea: 'dt' }}>
          <Box sx={{ m: 2 }}>
            Doctor Tips
          </Box>
        </Item>
        <Item sx={{ gridArea: 'da' }}>
          <Box sx={{ m: 2 }}>
            Data
          </Box>
        </Item>
      </Box>
    </Box>
  )
}

export default DashboardPage
