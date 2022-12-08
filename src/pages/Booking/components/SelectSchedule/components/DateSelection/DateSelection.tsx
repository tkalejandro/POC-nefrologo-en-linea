import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Typography, Box, Grid } from '@mui/material';


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
        <Box>
            {/* <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>Date:</Typography> */}
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ flex: 1 }}>
                        {showDate()}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ flex: 1 }}>
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
                </Grid>
            </Grid>
        </Box>
    );
}

export default DateSelection