import { Box, Chip, Stack } from '@mui/material'
import React from 'react'
import { TimeChip } from '../../../../../../types/BookingPage';


type Color = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
interface TimeSelectionProps {
    timeValue: string | null
    setTimeValue: (value : string | null) => void
    interval: number
}

/**
 * This component will choose the time. This format 20:45
 * @returns 
 */
const TimeSelection = ({ timeValue, setTimeValue, interval }: TimeSelectionProps) : JSX.Element => {

    const printTimes = (): TimeChip[] => {
        const result: TimeChip[] = [];
        for (let i = 0; i <= 60 * 24; i += interval) {
            const hours = Math.floor(i / 60);
            const minutes = i % 60;

            //This restriction should be consider with -5 GMT. Still need to think how this will be done.
            const minHour = 7
            const maxHour = 18

            if (hours >= minHour && hours < maxHour) {
                const time: TimeChip = {
                    time: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
                    available: i % 2 === 0
                }
                result.push(time);
            }
        }

        return result
    }

    /**
     * IT will pick a time. In this format -> "20:45"
     * @param time 
     */
    const timeSelection = (time: string) : void => {
       if(time === timeValue) {
           //is already selected, so unselect.
           setTimeValue(null)
           return
       }
       setTimeValue(time)
    }

    const times = printTimes()

    return (
        <Box sx={{ }}>
            {/* <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>Time:</Typography> */}

            <Stack direction="column" spacing={0} flexWrap="wrap" sx={{maxHeight: '500px'}}>
                {
                    times.map((t: TimeChip) => {

                        const { time, available } = t

                        const isSelected = () : Color =>  time === timeValue ? 'primary' : 'secondary'
                        return (
                            <Chip
                            disabled={!available}
                            onClick={() => available ? timeSelection(time) : null} 
                            key={time} 
                            label={time} 
                            color={available ? isSelected() : 'default'}
                             sx={{ m: 2 }} />
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default TimeSelection