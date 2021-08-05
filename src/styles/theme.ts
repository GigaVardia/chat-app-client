import { createTheme, Theme } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import grey from '@material-ui/core/colors/grey'; 


const lightTheme:Theme = createTheme({
  palette: {
    type: 'light',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
  }
})

const darkTheme:Theme = createTheme({
    palette: {
      type: 'dark',
        primary: {
          main: grey[500],
        },
        secondary: {
          main: green[600],
        },
    }
})

export {lightTheme, darkTheme}