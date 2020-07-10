/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import counterReducer, { CounterState, initialCounterState } from './counter';
import { logger } from './middleware';

// export type RootState = {counterReducer} CounterState;
export interface RootState {
  counterReducer: CounterState;
}

const REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION__';

export const rootReducer = combineReducers({ counterReducer });

const initialState = { counterReducer: initialCounterState };
const enhancers = [];
const middleware = [logger];

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  const devToolsExtension =
    ((window as any)[REDUX_DEV_TOOLS] && (window as any)[REDUX_DEV_TOOLS]()) ||
    compose;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
