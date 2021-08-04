import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { Home } from './components/Home';
import { theme } from './styles/theme';

const App:FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Home/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
