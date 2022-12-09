import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Modality } from '../../../../types/BookingPage'
import { useAppDispatch } from '../../../../redux/hooks'
import { selectDoctor, selectModality } from '../../../../redux/slices/bookingPageSlice'
import { SaludToolsModality } from '../../../../enums/SaludTools'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DevicesIcon from '@mui/icons-material/Devices';
import HouseIcon from '@mui/icons-material/House';
import { NefrologiaYDialisisSasInfo } from '../../../../constants'

interface SelectModalityProps {
  handleNext: () => void
}

/**
 * Component to select a doctor
 * @returns 
 */
const SelectModality = ({ handleNext }: SelectModalityProps) => {


  const allModality: Modality[] = [
    {
      id: 1,
      modality: SaludToolsModality.Conventional,
      icon: <LocalHospitalIcon color="primary" sx={{ fontSize: 150 }} />
    },
    {
      id: 2,
      modality: SaludToolsModality.Telemedicine,
      icon: <DevicesIcon color="primary" sx={{ fontSize: 150 }} />
    },
    {
      id: 3,
      modality: SaludToolsModality.Domiciliary,
      icon: <HouseIcon color="primary" sx={{ fontSize: 150 }} />
    }
  ]

  const dispatch = useAppDispatch()

  /**
   * Function to provide doctor information.
   */
  const modalitySelection = (modality: SaludToolsModality): void => {
    dispatch(selectModality(modality))
    handleNext()
  }

  /**
   * Depending of modality, we will show the description.
   * We keep it this way to make it posible to translate easier the information.
   */
  const descriptionToShow = (modality : SaludToolsModality) => {
    switch(modality) {
      case SaludToolsModality.Conventional:
        return `Your appointment will be at ${NefrologiaYDialisisSasInfo.name}, ${NefrologiaYDialisisSasInfo.address}.`
        case SaludToolsModality.Telemedicine: 
        return 'Your will receive an email to THIS EMAIL to connect via SaludTools.'
        case SaludToolsModality.Domiciliary:
          return 'Your appointment will be at your THIS ADDRESS.'
    }
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Select Modality</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {
          allModality.map((item: Modality) => {

            const { id, icon, modality } = item



            return (
              <Card key={id} sx={{ width: '100%', maxWidth: 365, m: 2 }}>
                <CardActionArea onClick={() => modalitySelection(modality)}>


                  <CardMedia
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
                  >
                    {icon}
                  </CardMedia>
                  <CardContent sx={{ textAlign: 'center', height: 100 }}>
                    <Typography gutterBottom variant="subtitle2" color="primary">
                      {modality}
                    </Typography>
                    <Typography gutterBottom variant="caption" color="text.secondary">
                     {descriptionToShow(modality)}
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

export default SelectModality