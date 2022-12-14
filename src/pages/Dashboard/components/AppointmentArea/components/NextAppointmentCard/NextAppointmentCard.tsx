import { Chip, Paper, Typography, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NefrologiaYDialisisAppointmentTypes, TypesOfSpeciality } from '../../../../../../enums/NefrologiaYDialisisSas'
import { namespaces } from '../../../../../../i18n/i18n.constants'
import { AppointmentCardInfo } from '../../../../../../types/DashboardPage'

/**
 * It render future appointments
 * @returns 
 */
const NextAppointmentCard = (): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.dashboard)
    const dummyArray: AppointmentCardInfo[] = [
        { id: 1, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.FirstTime, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
        { id: 2, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.FirstTimeOnline, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
        { id: 3, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.Control, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
        { id: 4, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.ControlOnline, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
        { id: 5, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.Generic, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
        { id: 6, specialist: TypesOfSpeciality.Nephrologist, appointment: NefrologiaYDialisisAppointmentTypes.GenericOnline, doctor: 'Dr Coronado', date: new Date(), icon: undefined },
    ]
    const translateAppointmentType = (string: NefrologiaYDialisisAppointmentTypes): string => {
        switch (string) {
            case NefrologiaYDialisisAppointmentTypes.Control:
            case NefrologiaYDialisisAppointmentTypes.ControlOnline:
                return 'appointmentArea.nextAppointment.types.control'

            case NefrologiaYDialisisAppointmentTypes.FirstTime:
            case NefrologiaYDialisisAppointmentTypes.FirstTimeOnline:
                return 'appointmentArea.nextAppointment.types.firstTime'

            case NefrologiaYDialisisAppointmentTypes.Generic:
            case NefrologiaYDialisisAppointmentTypes.GenericOnline:
                return 'appointmentArea.nextAppointment.types.generic'
        }
    }

    const translateSpecialityType = (string : TypesOfSpeciality) : string => {
        switch(string){
            case TypesOfSpeciality.General:
                return 'appointmentArea.nextAppointment.speciality.general'
                case TypesOfSpeciality.Nephrologist:
                    return 'appointmentArea.nextAppointment.speciality.nephrology'
                    case TypesOfSpeciality.Nutritionist:
                        return 'appointmentArea.nextAppointment.speciality.nutritionist'
        }
    }
    return (
        <Box>
            {
                dummyArray.map((item: AppointmentCardInfo) => {
                    const { id, doctor, specialist, appointment, date } = item

                    const isOnline = (): boolean => {
                        //TO DO - This is unflexible.
                        switch (appointment) {
                            case NefrologiaYDialisisAppointmentTypes.ControlOnline:
                            case NefrologiaYDialisisAppointmentTypes.FirstTimeOnline:
                            case NefrologiaYDialisisAppointmentTypes.GenericOnline: {
                                return true
                            }
                            default:
                                return false
                        }
                    }

                    return (
                        <Paper elevation={2}>
                            <Box key={id} sx={{ my: 2, p: 1, display: 'flex', justifyContent: 'space-between' }}>

                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography variant="subtitle2" component="h3">{t(translateAppointmentType(appointment))}</Typography>
                                    </Box>

                                    <Typography variant="body2">{t(translateSpecialityType(specialist))}</Typography>
                                    <Typography variant="body2">{doctor}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    {
                                        isOnline() ? <Chip label="online" size="small" color="secondary" sx={{ opacity: 0.8 }} /> : <Box />
                                    }
                                    <Typography variant="body2">{`${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`}</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    )
                })
            }
        </Box>
    )
}

export default NextAppointmentCard