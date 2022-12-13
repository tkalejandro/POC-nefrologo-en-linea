import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../../../pages/Routes';


/**
 * All related pages user might be ablee to navigate
 * @returns 
 */
const MenuPages = (): JSX.Element => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
    };

    const pages = ['dashboard', 'booking', 'test'];

    /**
     * Function to assign the correct path
     * @param page 
     * @returns 
     */
    const assignPath = (page: string): string => {
        switch (page) {
            case 'dashboard':
                return RoutesPath.dashboard
            case 'booking':
                return RoutesPath.booking
            case 'test':
                return RoutesPath.test
            default:
                return RoutesPath.dashboard
        }
    }

    return (
        <>
            {/* MOBILE */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem component={Link} to={assignPath(page)} key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            {/* DESKTOP */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        component={Link} to={assignPath(page)}
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    )
}

export default MenuPages