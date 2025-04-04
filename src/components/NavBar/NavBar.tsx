import { NavLink, Container } from '@mantine/core';

const NavBar = () => {
  return (
    <Container>
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <NavLink
            key={index}
            label={`Link ${index + 1}`}
            component='a'
            href='#'
          />
        ))}
    </Container>
  );
};

export default NavBar;
