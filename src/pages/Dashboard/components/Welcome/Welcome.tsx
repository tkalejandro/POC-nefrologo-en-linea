import { Typography, Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'
import { useAppSelector } from '../../../../redux/hooks'


//RAFCE

/**
 * This widget will welcome the user
 * @returns 
 */
const Welcome = (): JSX.Element => {

  const { t } = useTranslation(namespaces.pages.dashboard)
  
  const firstName = useAppSelector(state => state.user.saludToolsProfile?.firstName)
  
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" component="h2" sx={{}}>
        {t("welcome.title", {firstName})}
      </Typography>
      <Typography>{t("welcome.description")}</Typography>
    </Box>
  )
}

export default Welcome