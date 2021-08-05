import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { Home } from './components/Home';
import { lightTheme, darkTheme } from './styles/theme';
import { useTypedSelector } from './hooks/useTypedSelector';

const App:FC = () => {
  const { theme } = useTypedSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <React.Fragment>
        <CssBaseline />
        <Home/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
