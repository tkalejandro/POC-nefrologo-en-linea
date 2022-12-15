import { Chip, Paper, Typography, } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { availableDoctors } from '../../../../../../assets/data/availableDoctors'
import { TypesOfSpeciality } from '../../../../../../enums/NefrologiaYDialisisSas'
import { SaludToolsModality } from '../../../../../../enums/SaludTools'
import { namespaces } from '../../../../../../i18n/i18n.constants'
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks'
import { setNextAppointments } from '../../../../../../redux/slices/userSlice'
import { isApiError } from '../../../../../../services/ApiError'
import { saludToolsAppointmentController } from '../../../../../../services/SaludToolsAppointmentController'
import ChipModalityInfo from '../../../../../../types/DashboardPage/ChipModalityInfo'
import { AppointmentReadBody } from '../../../../../../types/SaludTools'

/**
 * It render future appointments
 * @returns 
 */
const NextAppointmentCard = (): JSX.Element => {

    const { t } = useTranslation(namespaces.pages.dashboard)
    const dispatch = useAppDispatch()

    const documentNumber = useAppSelector(state => state.user.saludToolsProfile?.documentNumber)
    const documentType = useAppSelector(state => state.user.saludToolsProfile?.documentType)

    const nextAppointments = useAppSelector(state => state.user.nextAppointments)

    const searchAppointments = async (): Promise<void> => {

        if (!documentNumber || !documentType) {
            //If there is no patient loaded there is no chance to load this info.
            return
        }

        const searchAppointmentsSaludtools = await saludToolsAppointmentController.searchAppointmentByDocumentId(documentNumber, documentType)

        if (isApiError(searchAppointmentsSaludtools)) {
            // TO DO - Should not connect, or try again. something is wrong.
            return
        }

        const { content } = searchAppointmentsSaludtools.body
       
        if ( content.length === 0) {
            // TO DO - Placeholder when there is no Data
        }
        dispatch(setNextAppointments(content))
        return
    }

    useEffect(() => {
        searchAppointments()
    }, [documentNumber, documentType])

    const translateSpecialityType = (documentIdNumber: string): string => {
        const findDoctor = availableDoctors.find(i => i.id === documentIdNumber)
        if(!findDoctor) {
          return '-'
        }

        const {specialist} = findDoctor

        switch (specialist) {
            case TypesOfSpeciality.General:
                return 'appointmentArea.nextAppointment.speciality.general'
            case TypesOfSpeciality.Nephrologist:
                return 'appointmentArea.nextAppointment.speciality.nephrology'
            case TypesOfSpeciality.Nutritionist:
                return 'appointmentArea.nextAppointment.speciality.nutritionist'
        }
    }

    const chipModalityInfo = (modality: SaludToolsModality): ChipModalityInfo => {
        switch (modality) {
            case SaludToolsModality.Conventional:
                return {
                    color: 'default',
                    translatedText: 'appointmentArea.nextAppointment.modality.conventional'
                }

            case SaludToolsModality.Telemedicine:
                return {
                    color: 'secondary',
                    translatedText: 'appointmentArea.nextAppointment.modality.telemedicine'
                }

            case SaludToolsModality.Domiciliary:
                return {
                    color: 'info',
                    translatedText: 'appointmentArea.nextAppointment.modality.domiciliary'
                }
        }
    }

    const findDoctorName = (documentIdNumber : string) : string => {
        const findDoctor = availableDoctors.find(i => i.id === documentIdNumber)
      
        if(!findDoctor) {
          return '-'
        }

        const {firstLastName} = findDoctor

        return `Dr. ${firstLastName}`
    }
    return (
        <Box>
            {
                nextAppointments?.map((item: AppointmentReadBody) => {
                    const { id, doctorDocumentNumber, startAppointment, modality } = item

                    const {color, translatedText } = chipModalityInfo(modality)

                    return (
                        <Paper key={id} elevation={2}>
                            <Box  sx={{ my: 2, p: 1, display: 'flex', justifyContent: 'space-between' }}>

                                <Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography variant="subtitle2" component="h3">{t(translateSpecialityType(doctorDocumentNumber))}</Typography>
                                    </Box>

                                    <Typography variant="body2">{findDoctorName(doctorDocumentNumber)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                   <Chip label={t(translatedText)} size="small" color={color} sx={{ opacity: 0.8 }} />
                                
                                    <Typography variant="body2">{startAppointment}</Typography>
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