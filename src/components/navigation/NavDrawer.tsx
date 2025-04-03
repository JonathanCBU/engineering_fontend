import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';

const drawerItems = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Career',
    path: '/career',
  },
  { text: 'Timer', path: '/timer' },
];

const NavDrawer = () => {
  return (
    <Box>
      <Drawer
        open
        variant='persistent'
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          {drawerItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <Link to={item.path} style={{ width: '100%' }}>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
