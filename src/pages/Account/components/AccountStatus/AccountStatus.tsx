import { Alert, Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../i18n/i18n.constants'
import { useAppSelector } from '../../../../redux/hooks'

const AccountStatus = (): JSX.Element | null => {

    const currentNydUser = useAppSelector(state => state.user.nydProfile)

    const { t } = useTranslation(namespaces.pages.account)

    if (!currentNydUser) {
        return null
    }

    const { habeasData, userVerified, userEssentialInformation } = currentNydUser
    return (
        <Box>
             <Typography variant="subtitle1" mb={2} color="primary">{t('accountStatus.title')}</Typography>
            <Alert square={false} severity={habeasData ? 'success' : 'error'} variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                <Typography color="text.secondary" variant="body2">{t('accountStatus.habeasData.description')}</Typography>
            </Alert>
            <Alert square={false} severity={userVerified ? 'success' : 'error'} variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', my: 1}}>
                <Typography color="text.secondary" variant="body2">{t('accountStatus.verifiedUser.description')}</Typography>
            </Alert>
            <Alert square={false} severity={userEssentialInformation ? 'success' : 'error'} variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                <Typography color="text.secondary" variant="body2">{t('accountStatus.essentialInformation.description')}</Typography>
            </Alert>
            <Alert square={false} severity={'error'} variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                <Typography color="text.secondary" variant="body2">{t('accountStatus.allowDomiciliary.description')}</Typography>
            </Alert>
        </Box>
    )
}

export default AccountStatus