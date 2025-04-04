import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const FullScreenContainer = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
});

const SideNav = styled(Box)(({ theme }) => ({
  width: '80px', // Adjust this width to match your sidebar
  height: '100%',
  borderRight: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MainContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
});

const Layout = () => {
  return (
    <FullScreenContainer>
      <SideNav>
        <NavDrawer />
      </SideNav>
      <MainContent>
        <Outlet />
      </MainContent>
    </FullScreenContainer>
  );
};

export default Layout;
