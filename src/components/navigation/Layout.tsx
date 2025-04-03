import { useState } from 'react';
import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const drawerWidth = '25%';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <nav>
        <NavDrawer open={drawerOpen} drawerWidth={drawerWidth} />
      </nav>
      <main>
        <Toolbar />
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
