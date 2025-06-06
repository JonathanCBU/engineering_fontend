import Header from '@/components/Header/Header';
import NavBar from '@/components/NavBar/NavBar';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

const AppLayout = (): React.JSX.Element => {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: !desktopOpened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Header opened={desktopOpened} toggle={toggleDesktop} />
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
