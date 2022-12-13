import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#92c137',
        },
        secondary: {
            main: '#315da8',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',  
        },
        background: {
            default: '#303030',
            paper: '#424242'  
        },
        divider: 'rgba(0,0,0,0.12)',
    }
});

export default theme;