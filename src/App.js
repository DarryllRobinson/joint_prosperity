import React from 'react';
import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Route from './components/Route'
import Book from './components/Book';
import Location from './components/Location';
import FirstVisit from './components/FirstVisit';
import Services from './components/Services';

import Introduction from './components/Introduction';
import SideMenu from './components/SideMenu';
import Header from './components/Header';

const drawerWidth = 200;

const theme = createTheme();

function App(props) {
  const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="sidebar menu"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <SideMenu />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <SideMenu />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
        <Route path="/"><Introduction /></Route>
        <Route path="/book"><Book /></Route>
        <Route path="/firstvisit"><FirstVisit /></Route>
        <Route path="/location"><Location /></Route>
        <Route path="/services"><Services /></Route>
              </Box>
          </Box>
    </ThemeProvider>
  );
}

export default App;
