import { Burger, Group, Switch, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { HeaderProps } from '@/types/layoutTypes';

const Header = ({ opened, toggle }: HeaderProps): React.JSX.Element => {
  const { setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        labelPosition='left'
        onLabel={<IconSun size={16} />}
        offLabel={<IconMoonStars size={16} />}
        size='lg'
        onChange={toggleColorScheme}
      />
    </Group>
  );
};

export default Header;
