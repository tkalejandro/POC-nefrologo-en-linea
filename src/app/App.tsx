import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { lightTheme } from '../theme';
import './App.css';
import { Footer, Header, Main } from './components';
import { store } from '../redux/store';
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
