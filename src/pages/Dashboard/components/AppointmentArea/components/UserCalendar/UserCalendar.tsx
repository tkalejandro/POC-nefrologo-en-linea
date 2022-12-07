import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Box, Typography } from '@mui/material';

/**
 * Calendar of the user, it will show a history of things that has happened with user.
 * @returns 
 */
const UserCalendar = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <Box>
      <Typography component="h2" variant="subtitle2" sx={{px: 2, pt: 2}}>Your calendar</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Box>
  );
}

export default UserCalendar