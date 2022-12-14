import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRoutes, RouteName } from '../../../../../pages/xroutes';
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../../../../i18n/i18n.constants';


/**
 * All related pages user might be ablee to navigate
 * @returns 
 */
const MenuPages = (): JSX.Element => {

    const { t } = useTranslation(namespaces.app)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
    };

    const pages = [
        RouteName.Dashboard,
        RouteName.Booking,
        RouteName.Test
    ];

    /**
     * Function to assign the correct path
     * @param page 
     * @returns 
     */
    const assignPath = (page: RouteName): string => {
        switch (page) {
            case RouteName.Dashboard:
                return AppRoutes.dashboard.path
            case RouteName.Booking:
                return AppRoutes.booking.path
            case RouteName.Test:
                return AppRoutes.test.path
            default:
                return AppRoutes.dashboard.path
        }
    }

    const translateRouteName = (str: RouteName): string => {
        switch (str) {
            case RouteName.Dashboard:
                return 'routeNames.dashboard'
            case RouteName.Booking:
                return 'routeNames.booking'
            case RouteName.Test:
                return 'routeNames.test'
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
                            <Typography textAlign="center">{t(translateRouteName(page))}</Typography>
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
                        {t(translateRouteName(page))}
                    </Button>
                ))}
            </Box>
        </>
    )
}

export default MenuPages