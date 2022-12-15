import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { TypesOfSpeciality } from '../../../../enums/NefrologiaYDialisisSas'
import { DoctorInfo } from '../../../../types/BookingPage'
import { useAppDispatch } from '../../../../redux/hooks'
import { selectDoctor } from '../../../../redux/slices/bookingPageSlice'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'
import { availableDoctors } from '../../../../assets/data/availableDoctors'


interface SelectDoctorProps {
  handleNext: () => void
}

/**
 * Component to select a doctor
 * @returns 
 */
const SelectDoctor = ({ handleNext }: SelectDoctorProps): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.booking)

  const dispatch = useAppDispatch()

  /**
   * Function to provide doctor information.
   */
  const doctorSelection = (id: string): void => {
    dispatch(selectDoctor(id))
    handleNext()
  }

  const translateSpecialist = (string: TypesOfSpeciality): string => {
    let speciality: string;
    switch (string) {
      case TypesOfSpeciality.General:
        speciality = 'selectDoctor.speciality.general'
        break
      case TypesOfSpeciality.Nephrologist:
        speciality = 'selectDoctor.speciality.nephrologist'
        break
      case TypesOfSpeciality.Nutritionist:
        speciality = 'selectDoctor.speciality.nutritionist'
        break
    }
  
    return speciality
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>{t("steps.selectDoctor")}</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {
          availableDoctors.map((doctor: DoctorInfo) => {

            const { firstName, firstLastName, secondName, secondLastName, localImage, specialist, id } = doctor

            const fullName = `Dr. ${firstName} ${secondName ?? ''} ${firstLastName} ${secondLastName ?? ''}`

            return (
              <Card key={id} sx={{ width: '100%', maxWidth: 365, m: 2 }}>
                <CardActionArea onClick={() => doctorSelection(id)}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={localImage}
                    alt={fullName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" color="primary">
                      {fullName}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                      {t(translateSpecialist(specialist))}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>)
          })
        }
      </Box>
    </Box>
  )
}

export default SelectDoctor