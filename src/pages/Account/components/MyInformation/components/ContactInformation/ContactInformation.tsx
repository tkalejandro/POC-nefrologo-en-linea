import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { MyInformationForm } from '../../../../../../enums/NefrologiaYDialisisSas';
import { namespaces } from '../../../../../../i18n/i18n.constants';
import { NydUser } from '../../../../../../types/NefrologiaYDialisis';

interface GeneralInformationProps {
    value?: NydUser
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ContactInformation = ({value, handleChange} : GeneralInformationProps): JSX.Element | null => {

  const { t } = useTranslation(namespaces.pages.account)

  if (!value) {
    return null
  }
  return (
    <Box sx={{ flex: 1, mt: 2 }}>
      <Typography variant="subtitle1" mb={2} color="primary">{t('myInformation.contact.title')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={MyInformationForm.Email}
            label={t('myInformation.contact.email')}
            placeholder='alex@grossi.com'
            value={value.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3} md={1}>
          <TextField
            fullWidth
            required
            id={MyInformationForm.CountryCode}
            label={t('myInformation.contact.countryCode')}
            value={value.countryCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={9} md={5}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.MobilePhone}
            label={t('myInformation.contact.mobilePhone')}
            value={value.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder={t('myInformation.contact.fullAddressPlaceholder') ?? ''}
            fullWidth
            id={MyInformationForm.MobilePhone}
            label={t('myInformation.contact.fullAddress')}
            value={value.fullAddress}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactInformation