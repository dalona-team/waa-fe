import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4964FF', // primary color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#575A5A', // secondary color
    },
    info: {
      main: '#4964FF29', // info color
      contrastText: '#4964FF',
    },
  }
});

export default theme;