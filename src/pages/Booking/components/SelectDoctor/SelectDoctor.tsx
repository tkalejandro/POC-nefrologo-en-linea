import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { TypesOfSpeciality } from '../../../../enums/NefrologiaYDialisisSas'
import { DoctorInfo } from '../../../../types/BookingPage'
import DoctorCoronado from '../../../../assets/staff/drCoronado.png'
import DoctorHernandez from '../../../../assets/staff/drHernandez.jpeg'
import { useAppDispatch } from '../../../../redux/hooks'
import { selectDoctor } from '../../../../redux/slices/bookingPageSlice'


interface SelectDoctorProps {
  handleNext: () => void
}

/**
 * Component to select a doctor
 * @returns 
 */
const SelectDoctor = ({ handleNext }: SelectDoctorProps) : JSX.Element => {

  const availableDoctors: DoctorInfo[] = [
    {
      id: "123456789",
      firstName: "Jorge",
      secondName: "Antonio",
      firstLastName: "Coronado",
      secondLastName: "Daza",
      specialist: TypesOfSpeciality.Nephrologist,
      localImage: DoctorCoronado
    },
    {
      id: "987654321",
      firstName: "Andres",
      firstLastName: "Hernandez",
      secondLastName: "Coronado",
      specialist: TypesOfSpeciality.Nephrologist,
      localImage: DoctorHernandez
    },
  ]

  const dispatch = useAppDispatch()

  /**
   * Function to provide doctor information.
   */
  const doctorSelection = (id: string): void => {
    dispatch(selectDoctor(id))
    handleNext()
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Select Doctor</Typography>

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
                      {specialist}
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