import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../../../../../../i18n/i18n.constants'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAppSelector } from '../../../../../../redux/hooks';

interface SuccessCardProps {
    notification: string
}

const SuccessCard = ({ notification }: SuccessCardProps): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.booking)
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const dateTime = useAppSelector(state => state.booking.bookingPreRequest?.startAppointment)

    useEffect(() => {
        if (dateTime == null) {
            return
        }

        const [onlyDate, onlyTime] = dateTime.split(" ")
        setDate(onlyDate)
        setTime(onlyTime)
    }, [])

    const userEmail = useAppSelector(state => state.user.saludToolsProfile?.email)

    //TO DO - The sucess Message should be dynamic , depending of modality choosen.
    // The information can be collected inside redux before clicking okay, which will clear the redux.

    return (
        <>
            <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
            >
                <CheckCircleIcon color="success" sx={{ fontSize: 150 }} />
            </CardMedia>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                    {t("confirmation.successMessage", { id: notification })}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {t("confirmation.successDescription", { email: userEmail, date, time })}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{t("confirmation.okay")}</Button>
            </CardActions>
        </>
    )
}

export default SuccessCard