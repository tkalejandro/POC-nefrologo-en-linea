import React from 'react'
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Box, } from '@mui/material';

interface DateSelectionProps {
    dateValue: Dayjs | null
    setDateValue: (value: Dayjs | null) => void
}

/**
 * This is where user pick a date for the next appointment
 * @returns 
 */
const DateSelection = ({ dateValue, setDateValue }: DateSelectionProps) : JSX.Element => {


    const isWeekend = (date: Dayjs) : boolean => {
        const day = date.day();

        return day === 0 || day === 6;
    };



    return (
        <Box>
            {/* <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>Date:</Typography> */}
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        //openTo="day"
                        value={dateValue}
                        shouldDisableDate={isWeekend}
                        onChange={(newValue) => {
                            setDateValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </Box>
    );
}

export default DateSelection