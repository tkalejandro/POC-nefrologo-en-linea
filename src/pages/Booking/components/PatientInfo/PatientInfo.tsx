import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

//! ON HOLD!  It might be, this makes more sense when we are creating a new account.
const PatientInfo = () => {

  const [value, setValue] = React.useState('hi');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ flex: 1, mt: 2 }}>
      <Typography variant="h5" mb={2} color="primary">Your information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} md={3}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Document"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8} md={9}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="ID"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="First Name"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Second name"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Last name"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Second last name"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Gender"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Birthday"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Email"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3} md={1}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Country"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={9} md={5}>
          <TextField
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Phone"
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="outlined-multiline-flexible"
            label="Comments"
            value={value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>

  )
}

export default PatientInfo