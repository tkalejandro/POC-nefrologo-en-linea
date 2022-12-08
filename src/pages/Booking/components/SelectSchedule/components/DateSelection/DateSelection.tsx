import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Typography, Box } from '@mui/material';


/**
 * This is where user pick a date for the next appointment
 * @returns 
 */
const DateSelection = () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs());

    const isWeekend = (date: Dayjs) => {
        const day = date.day();

        return day === 0 || day === 6;
    };

    const showDate = (): string | null => {
        if (value == null) {
            return null
        }
        return value.format('ll')
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <Typography variant="h3" sx={{flex: 1}}>
            <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>Date:</Typography>
                {showDate()}
            </Typography>
            <Box sx={{flex: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        //openTo="day"
                        value={value}
                        shouldDisableDate={isWeekend}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </Box>
    );
}

export default DateSelection