import { useState } from 'react';
import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import HeaderBar from './HeaderBar';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderBar toggleNavBar={handleDrawerToggle} drawerOpened={drawerOpen} />
      <nav>
        <NavDrawer open={drawerOpen} />
      </nav>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
