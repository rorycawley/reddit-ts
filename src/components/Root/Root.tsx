/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './App';

interface RootProps {
  store: Store;
}

const Root: FC<RootProps> = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Root;
