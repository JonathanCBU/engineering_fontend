import { NavLink, Container } from '@mantine/core';

const NavBar = (): React.JSX.Element => {
  return (
    <Container>
      <NavLink label='Home' href='/' />
      <NavLink label='Career' href='career' />
      <NavLink label='Timer' href='timer' />
    </Container>
  );
};

export default NavBar;
