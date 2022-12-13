import { Box, Grid, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../redux/hooks';
import { selectDateTime } from '../../../../redux/slices/bookingPageSlice';
import { StartingEndingDateTime } from '../../../../types/BookingPage';
import { DateSelection, TimeSelection } from './components'

const Schedule = () : JSX.Element => {

  const dispatch = useAppDispatch()

  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [timeValue, setTimeValue] = useState<string | null>(null)
  //Interval of 45 mins
  const interval = 45

  const showDate = (): string => {
    if (dateValue == null) {
      return ''
    }
    return dateValue.format('ll')
  }

  const showTime = (): string => {
    if (timeValue == null) {
      return ''
    }

    return `at ${timeValue}`
  }

  /**
   * Function that assign starting and ending date times.
   */
  const dateTimeSelection = () : void => {
    if (dateValue == null || timeValue == null) {
      return
    }

    const day = dateValue.get('date')
    const year = dateValue.get('year')
    const month = dateValue.get('month')
    const [hour, minute] = timeValue.split(":")

    const startDateTime = dayjs()
      .set('date', day)
      .set('month', month)
      .set('year', year)
      .set('hour', Number(hour)) // TODO - Why this is working? It should be 0 to 23. But im using 1 to 24.
      .set('minute', Number(minute))
      .set('second', 0)
      .set('millisecond', 0)

    const endDateTime = startDateTime.add(interval, 'minute')

    //SaludTools expect this 2021-04-30 08:00. yyyy-mm-dd HH:mm to Dayjs will be:
    const format = 'YYYY-MM-DD HH:mm'
    const dates: StartingEndingDateTime = {
      startTime: startDateTime.format(format),
      endTime: endDateTime.format(format)
    }

    dispatch(selectDateTime(dates))
  }

  useEffect(() => {
    dateTimeSelection()
  }, [dateValue, timeValue])

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Date and time</Typography>
      <Grid container>
        <Grid item xs={12} >
          <Typography textAlign="center" variant="h4" color="primary.dark" sx={{ flex: 1, mb: 4 }}>
            {`${showDate()} ${showTime()}`}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <DateSelection
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TimeSelection
            timeValue={timeValue}
            setTimeValue={setTimeValue}
            interval={interval}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Schedule