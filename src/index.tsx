import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import configureStore from './store';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
