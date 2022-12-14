import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'


const UrgentCommunication = (): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.dashboard)

    return (
        <Box sx={{ m: 2 }}>
            <Typography sx={{}}>
                {t("urgentCommunication.title")}
            </Typography>
        </Box>
    )
}

export default UrgentCommunication