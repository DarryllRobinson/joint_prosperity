import {
    AppBar,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';

import { Menu } from '@mui/icons-material';

export default function Header({handleDrawerToggle, drawerWidth}) {
    return (
        <AppBar
                position="fixed"
                sx={{
                    ml: { sm: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Joint Prosperity
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}