import React, {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router'

const Dashboard = lazy(() => import('../../../pages/Dashboard/DashboardPage'))
const Booking = lazy(() => import('../../../pages/Booking/BookingPage'))
const Test = lazy(() => import('../../../pages/Test/TestPage'))

//To do!
const Loading = () => <p>Loading ...</p>;


const Main = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Suspense>
    )
}

export default Main