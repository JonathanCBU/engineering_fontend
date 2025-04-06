import { NavLink, Container } from '@mantine/core';

const NavBar = () => {
  return (
    <Container>
      <NavLink label='Home' href='/' />
      <NavLink label='Career' href='career' />
      <NavLink label='Timer' href='timer' />
    </Container>
  );
};

export default NavBar;
