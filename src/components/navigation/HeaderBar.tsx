import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderBarProps {
  toggleNavBar: () => void;
  drawerOpened: boolean;
}

const HeaderBar = ({ toggleNavBar, drawerOpened }: HeaderBarProps) => {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          sx={{ mr: 2 }}
          onClick={toggleNavBar}
        >
          {drawerOpened ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
