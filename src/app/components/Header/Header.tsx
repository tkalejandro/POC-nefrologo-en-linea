import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo, MenuPages } from './components';

/**
 * Header. It will contain all the navigation from pages to account pages.
 * @returns 
 */
const Header = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuPages />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;