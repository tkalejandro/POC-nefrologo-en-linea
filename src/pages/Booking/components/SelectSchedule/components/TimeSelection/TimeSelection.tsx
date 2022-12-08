import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { TimeChip } from '../../../../../../types/BookingPage';

const TimeSelection = () => {

    const printTimes = (): TimeChip[] => {
        const result : TimeChip[] = [];
        const interval = 45;
        for (let i = 0; i <= 60 * 24; i += interval) {
            let hours = Math.floor(i / 60);
            let minutes = i % 60;

            //This restriction should be consider with -5 GMT. Still need to think how this will be done.
            const minHour = 7
            const maxHour = 18
           
            if(hours >= minHour && hours < maxHour) {
                const rnd = Math.floor(Math.random() * 10) + 1;
                const time : TimeChip= {
                    time:  `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
                    available: rnd % 2 === 0
                }
                result.push(time);
            }
        }

        return result
    }

    const times = printTimes()

    return (
        <Box sx={{  height: '100%' }}>
            {/* <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>Time:</Typography> */}

            <Stack direction="column" spacing={0} flexWrap="wrap" sx={{ maxHeight: '50%' }}>
                {
                    times.map((t : TimeChip) => {

                        const { time, available} = t
                        return (
                            <Chip key={time} label={time} color={available ? 'secondary' : 'default'} sx={{ m: 2 }} />
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default TimeSelection