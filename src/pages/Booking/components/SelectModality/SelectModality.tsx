import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Modality } from '../../../../types/BookingPage'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { selectModality } from '../../../../redux/slices/bookingPageSlice'
import { SaludToolsModality } from '../../../../enums/SaludTools'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DevicesIcon from '@mui/icons-material/Devices';
import HouseIcon from '@mui/icons-material/House';
import { NefrologiaYDialisisSasInfo } from '../../../../constants'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'

interface SelectModalityProps {
  handleNext: () => void
}

/**
 * Component to select a doctor
 * @returns 
 */
const SelectModality = ({ handleNext }: SelectModalityProps): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.booking)

  const userEmail = useAppSelector(state => state.user.saludToolsProfile?.email)
  const userAddress = useAppSelector(state => state.user.saludToolsProfile?.address?.mainAddress)

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
  const descriptionToShow = (modality: SaludToolsModality): string | undefined => {
    if(userEmail == null || userAddress == null) {
      return undefined
    } 
    switch (modality) {
      case SaludToolsModality.Conventional:{
        const text = t("selectModality.conventional.description", {companyName: NefrologiaYDialisisSasInfo.name, companyAddress: NefrologiaYDialisisSasInfo.address})
        return text 
      }
      case SaludToolsModality.Telemedicine:{
        const text = t("selectModality.telemedicine.description", {userEmail})
        return text 
      }
      case SaludToolsModality.Domiciliary:{
        const text = t("selectModality.domiciliary.description", {userAddress})
        return text }
    }
  }

  const titleToShow = (modality: SaludToolsModality) : string => {
    let title : string;
    switch (modality) {
      case SaludToolsModality.Conventional:{
        title = 'selectModality.conventional.title' 
        break;
      }
      case SaludToolsModality.Telemedicine:{
      title = 'selectModality.telemedicine.title' 
      break;
      }
      case SaludToolsModality.Domiciliary:
        title = 'selectModality.domiciliary.title' 
        break
    }

    const translatedTitle = t(title)

    return translatedTitle
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>{t("steps.selectModality")}</Typography>

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
                      {titleToShow(modality)}
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