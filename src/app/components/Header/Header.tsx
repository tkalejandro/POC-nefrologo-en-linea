import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo, MenuPages } from './components';
import AccountMenu from './components/AccountMenu/AccountMenu';
import { Theme } from '@mui/material';

/**
 * Header. It will contain all the navigation from pages to account pages.
 * @returns 
 */
const Header = () => {

  return (
    <AppBar variant="outlined" position="static" elevation={0}
    sx={(theme : Theme) =>({
      background: theme.palette.background.paper
    })}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuPages />
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;