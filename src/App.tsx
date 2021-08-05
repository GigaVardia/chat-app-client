import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { Home } from './components/Home';
import { lightTheme, darkTheme } from './styles/theme';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Route, Switch } from 'react-router-dom';

const App:FC = () => {
  const { theme } = useTypedSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
