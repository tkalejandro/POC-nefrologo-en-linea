import { Container } from '@mui/system'
import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { AppRoutes } from '../../../pages/routes'
import { useAppDispatch } from '../../../redux/hooks'
import { setSaludtoolsProfile } from '../../../redux/slices/userSlice'
import { isApiError } from '../../../services/ApiError'
import { saludToolsPatientController } from '../../../services/SaludToolsPatientController'

const Dashboard = lazy(() => import('../../../pages/Dashboard/DashboardPage'))
const Booking = lazy(() => import('../../../pages/Booking/BookingPage'))
const Test = lazy(() => import('../../../pages/Test/TestPage'))

//To do!
const Loading = () : JSX.Element => <p>Loading ...</p>;

/**
 * Here wwe will storage all the routes
 * @returns 
 */
const Main = () : JSX.Element => {

    const dispatch = useAppDispatch()

    const getCurrentUser = async () : Promise<void> => {
        const dummyCookieID = "1143354135"

        if(!dummyCookieID) {
            //If there is no cookie there is no chance to load this info.
            return
        }
        const readPatientSaludtools = await saludToolsPatientController.readPatient(dummyCookieID)

        if(isApiError(readPatientSaludtools)) {
            // TO DO - Should not connect, or try again. something is wrong.
            return
        }

        const {body} = readPatientSaludtools
        console.log(body)
        dispatch(setSaludtoolsProfile(body))
        return
    }
  
    useEffect( () => {
        getCurrentUser()
    }, [])

    return (
        <Container
            maxWidth="xl"
            sx={{ py: 5 }}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={AppRoutes.dashboard.path} element={<Dashboard />} />
                    <Route path={AppRoutes.booking.path} element={<Booking />} />
                    <Route path={AppRoutes.test.path} element={<Test />} />
                </Routes>
            </Suspense>
        </Container>
    )
}

export default Main