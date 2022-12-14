import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../../../../../i18n/i18n.constants';


/**
 * Calendar of the user, it will show a history of things that has happened with user.
 * @returns 
 */
const UserCalendar = (): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.dashboard)

  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <Box>
      <Typography component="h2" variant="subtitle2" sx={{ mt: 2, mx: 2 }}>{t("appointmentArea.userCalendar.title")}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue): void => {
            setValue(newValue);
          }}
          renderInput={(params): JSX.Element => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default UserCalendar