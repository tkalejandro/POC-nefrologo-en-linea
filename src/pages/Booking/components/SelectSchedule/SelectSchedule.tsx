import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { DateSelection, TimeSelection } from './components'

const Schedule = () => {
  return (
    <Box sx={{ flex: 1}}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Date and time</Typography>
      <Grid container>
        <Grid item xs={12} lg={6}>
        <DateSelection />
        </Grid>
        <Grid item xs={12} lg={6}>
        <TimeSelection />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Schedule