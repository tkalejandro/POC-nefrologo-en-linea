import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo, MenuPages } from './components';
import AccountMenu from './components/AccountMenu/AccountMenu';
import { Box, Button, ButtonGroup, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * Header. It will contain all the navigation from pages to account pages.
 * @returns 
 */
const Header = (): JSX.Element => {

  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  return (
    <AppBar variant="outlined" position="static" elevation={0}
      sx={(theme: Theme) => ({
        background: theme.palette.background.paper
      })}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuPages />
          <Box>
            <ButtonGroup variant="text" aria-label="outlined button group" color="primary">
              <Button onClick={changeLanguage("en")}>EN</Button>
              <Button onClick={changeLanguage("es")}>ES</Button>
            </ButtonGroup>
          </Box>
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;