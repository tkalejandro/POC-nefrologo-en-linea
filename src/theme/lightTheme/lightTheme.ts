
import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#315da8',
    },
    secondary: {
      main: '#92c137',
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
      default: '#f6f5f0',
      paper: '#fff',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
});

export default theme;