import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <nav>
        <NavDrawer />
      </nav>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
