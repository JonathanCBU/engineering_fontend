import { Burger, Group, Switch, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const Header = ({ opened, toggle }: HeaderProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(colorScheme);
    if (event.target.checked) {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  return (
    <Group h='100%' px='md' justify='space-between'>
      <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
      <Burger opened={opened} onClick={toggle} visibleFrom='sm' size='sm' />
      <Switch
        label={`Color scheme: ${colorScheme}`}
        labelPosition='left'
        onLabel={<IconSun size={16} />}
        offLabel={<IconMoonStars size={16} />}
        size='lg'
        onChange={(event) => toggleColorScheme(event)}
      />
    </Group>
  );
};

export default Header;
