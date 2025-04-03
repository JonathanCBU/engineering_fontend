import NavDrawer from './NavDrawer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavDrawer />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
