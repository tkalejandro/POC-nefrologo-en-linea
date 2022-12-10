import { Container } from '@mui/system'
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { RoutesPath } from '../../../pages/Routes'

const Dashboard = lazy(() => import('../../../pages/Dashboard/DashboardPage'))
const Booking = lazy(() => import('../../../pages/Booking/BookingPage'))
const Test = lazy(() => import('../../../pages/Test/TestPage'))

//To do!
const Loading = () => <p>Loading ...</p>;

/**
 * Here wwe will storage all the routes
 * @returns 
 */
const Main = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{ py: 5 }}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={RoutesPath.dashboard} element={<Dashboard />} />
                    <Route path={RoutesPath.booking} element={<Booking />} />
                    <Route path={RoutesPath.test} element={<Test />} />
                </Routes>
            </Suspense>
        </Container>
    )
}

export default Main