import { ThemeProvider } from '@mui/material';
import React from 'react';
import { lightTheme } from '../theme';
import './App.css';
import { Footer, Header, Main } from './components';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
