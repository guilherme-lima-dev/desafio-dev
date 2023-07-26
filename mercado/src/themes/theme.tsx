import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#191970',
    },
    secondary: {
      main: '#00ff7f',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;