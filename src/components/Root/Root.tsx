/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

interface RootProps {
  store: Store;
}

const Root: FC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);
export default Root;
