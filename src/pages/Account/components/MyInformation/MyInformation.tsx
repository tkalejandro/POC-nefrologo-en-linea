import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { MyInformationForm } from '../../../../enums/NefrologiaYDialisisSas';
import { useAppSelector } from '../../../../redux/hooks';
import { NydUser } from '../../../../types/NefrologiaYDialisis';
import { ContactInformation, GeneralInformation } from './components';

const MyInformation = (): JSX.Element | null => {

  const currentNydUser = useAppSelector(state => state.user.nydProfile)

  const [value, setValue] = React.useState<undefined | NydUser>();

  useEffect(() => {
    setValue(currentNydUser)
  }, [currentNydUser])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!value) {
      return
    }
    switch (event.target.id) {
      case MyInformationForm.DocumentType:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setValue({ ...value, documentType: event.target.value as any })
        return
      case MyInformationForm.DocumentNumber:
        setValue({ ...value, documentNumber: event.target.value })
        return
      case MyInformationForm.FirstName:
        setValue({ ...value, firstName: event.target.value })
        return
      case MyInformationForm.SecondName:
        setValue({ ...value, secondName: event.target.value })
        return
      case MyInformationForm.LastName:
        setValue({ ...value, lastName: event.target.value })
        return
      case MyInformationForm.SecondLastName:
        setValue({ ...value, secondLastName: event.target.value })
        return
      case MyInformationForm.Gender:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setValue({ ...value, gender: event.target.value as any })
        return
      case MyInformationForm.BirthDate:
        setValue({ ...value, birthDate: event.target.value })
        return
      case MyInformationForm.Email:
        setValue({ ...value, email: event.target.value })
        return
      case MyInformationForm.CountryCode:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setValue({ ...value, countryCode: event.target.value as any })
        return
      case MyInformationForm.MobilePhone:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setValue({ ...value, mobile: event.target.value as any })
        return
      case MyInformationForm.FullAddress:
        setValue({ ...value, fullAddress: event.target.value })
        return
    }
  };

  if (!value) {
    return null
  }
  return (
    <Box sx={{ flex: 1 }}>
      <GeneralInformation
        value={value}
        handleChange={handleChange}
      />
      <ContactInformation
        value={value}
        handleChange={handleChange}
      />
    </Box>
  )
}

export default MyInformation