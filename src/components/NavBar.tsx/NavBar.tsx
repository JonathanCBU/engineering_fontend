import { Container, Tabs } from '@mantine/core';

const tabs = ['Home', 'Career', 'Education', 'Projects'];

const NavBar = () => {
  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <>
      <Container size="md">
        <Tabs defaultValue="Home" variant="outline" visibleFrom="sm">
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </>
  );
};

export default NavBar;
