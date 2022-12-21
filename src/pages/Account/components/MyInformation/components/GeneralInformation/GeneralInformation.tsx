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

const GeneralInformation = ({value, handleChange} : GeneralInformationProps): JSX.Element | null => {

  const { t } = useTranslation(namespaces.pages.account)

  if (!value) {
    return null
  }
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="subtitle1" mb={2} color="primary">{t('myInformation.general.title')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} md={3}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.DocumentType}
            label={t('myInformation.general.documentType')}
            value={value.documentType}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8} md={9}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.DocumentNumber}
            label={t('myInformation.general.documentNumber')}
            value={value.documentNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.FirstName}
            label={t('myInformation.general.firstName')}
            value={value.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id={MyInformationForm.SecondName}
            label={t('myInformation.general.secondName')}
            value={value.secondName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.LastName}
            label={t('myInformation.general.lastName')}
            value={value.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id={MyInformationForm.SecondLastName}
            label={t('myInformation.general.secondLastName')}
            value={value.secondLastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id={MyInformationForm.Gender}
            label={t('myInformation.general.gender')}
            value={value.gender}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder='yyyy-mm-dd'
            id={MyInformationForm.BirthDate}
            label={t('myInformation.general.birthDate')}
            value={value.birthDate}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default GeneralInformation