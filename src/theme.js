import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
 typography: {
	 h1: {
		fontFamily: ['Times New Roman', '"Montserrat"', 'Open Sans'].join(','),
		fontSize: "110px" 
	 }
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    info: {
      main: '#2196f3',
    }
  },
});

export default theme;