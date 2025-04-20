import { NavLink, Container } from '@mantine/core';

const NavBar = (): React.JSX.Element => {
  return (
    <Container>
      <NavLink label='Home' href='/' />
      <NavLink label='Career' href='career' />
    </Container>
  );
};

export default NavBar;
