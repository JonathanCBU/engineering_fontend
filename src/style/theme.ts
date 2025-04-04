import { createTheme } from '@mui/material/styles';

export const containerMargins = {
  left: '180px',
  right: 0,
  top: 0,
  bottom: 0,
};

const theme = createTheme({
  palette: {},
  spacing: 8,

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundColor: null,
          width: containerMargins.left,
        },
      },
    },
  },
});

export default theme;
