import {
  Burger,
  Group,
  Switch,
  useMantineColorScheme,
  NavLink,
} from '@mantine/core';
import {
  IconSun,
  IconMoonStars,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';
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
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom='sm'
        size='sm'
        data-testid='burger-1'
      />
      <Burger opened={opened} onClick={toggle} visibleFrom='sm' size='sm' />
      <Group>
        <NavLink
          href='https://www.linkedin.com/in/j-evan-cook/'
          label='LinkedIn'
          leftSection={<IconBrandLinkedin />}
          style={{ width: 'auto' }}
          target='_blank'
          rel='noopener noreferrer'
        />
        <NavLink
          href='https://github.com/JonathanCBU'
          label='GitHub'
          leftSection={<IconBrandGithub />}
          style={{ width: 'auto' }}
          target='_blank'
          rel='noopener noreferrer'
        />
        <Switch
          labelPosition='left'
          onLabel={<IconSun size={16} />}
          offLabel={<IconMoonStars size={16} />}
          size='lg'
          onChange={toggleColorScheme}
        />
      </Group>
    </Group>
  );
};

export default Header;
