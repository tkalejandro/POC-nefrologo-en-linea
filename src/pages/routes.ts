/**
 * This File will contain all Routes for the project.
 * Also Functions for generating new  dynamic routes.
 */


//? Im trying something new here. Please give some comments if its weird. :-)

export enum RouteName {
    Dashboard = 'dashboard',
    Account = 'account',
    Booking = 'booking',
    Test = 'test'
}
 export const AppRoutes = {
    dashboard: {
        name: RouteName.Dashboard,
        path: '/',
    },
    booking: {
        name: RouteName.Booking,
        path: '/booking',
    },
    account: {
        name: RouteName.Account,
        path: '/account'
    },
    test: {
        name: RouteName.Test,
        path: '/test',
    }
}