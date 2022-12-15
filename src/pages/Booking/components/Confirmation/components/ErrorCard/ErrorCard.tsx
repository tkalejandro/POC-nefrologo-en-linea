import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../../../i18n/i18n.constants'
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorCardProps {
    notification: string
}

const ErrorCard = ({ notification }: ErrorCardProps): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.booking)

    return (
        <>
            <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                <ErrorIcon color="error" sx={{ fontSize: 150 }} />
            </CardMedia>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                    {t("confirmation.errorMessage")}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {notification}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{t("confirmation.tryAgain")}</Button>
            </CardActions>
        </>
    )
}

export default ErrorCard