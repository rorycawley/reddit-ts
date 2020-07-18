/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';

import theme from '../../ui/theme';

interface RootProps {
  store: Store;
}

const Root: FC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </ThemeProvider>
  </Provider>
);
export default Root;
