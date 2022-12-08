
import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#224d6d',
    },
    secondary: {
      main: '#92c137',
    },
    error: {
      main: '#c91d1d',
    },
    warning: {
      main: '#E8A530',
    },
    info: {
      main: '#315da8',
    },
    success: {
      main: '#73B234',
    },
    background: {
      default: '#F2F2F3',
      paper: '#fff',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
});

export default theme;