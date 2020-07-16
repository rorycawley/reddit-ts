/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  StoreEnhancer,
  Store
} from 'redux';

import {
  SubredditsState,
  subredditsSagas,
  fetchSubreddits,
  subredditsReducer
} from './subreddits';

import { loggerMiddleware, normalizeMiddleware } from './middleware';
import { loadState, saveState } from 'src/store/common/localStorage';
import throttle from 'lodash/throttle';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

export interface RootState {
  subreddits: SubredditsState;
}

// ██████╗  ██████╗  ██████╗ ████████╗    ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
// ██████╔╝██║   ██║██║   ██║   ██║       ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝
// ██╔══██╗██║   ██║██║   ██║   ██║       ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝
const rootReducer = combineReducers({ subreddits: subredditsReducer });

// ██████╗  ██████╗  ██████╗ ████████╗    ███████╗ █████╗  ██████╗  █████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔══██╗██╔════╝ ██╔══██╗
// ██████╔╝██║   ██║██║   ██║   ██║       ███████╗███████║██║  ███╗███████║
// ██╔══██╗██║   ██║██║   ██║   ██║       ╚════██║██╔══██║██║   ██║██╔══██║
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ███████║██║  ██║╚██████╔╝██║  ██║
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
function* rootSaga() {
  yield all([...subredditsSagas]);
}

export const configureStore = (storeEnhancers: StoreEnhancer[] = []) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [loggerMiddleware, sagaMiddleware, normalizeMiddleware];

  const store = createStore(
    rootReducer,
    compose(...[applyMiddleware(...middlewares), ...storeEnhancers])
  ) as Store;

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV === 'development') {
    // allow me to play with redux through the console
    const W: any = window; // (window: any) = W;

    W.store = store;
    W.querySubreddits = fetchSubreddits;

    // http://patorjk.com/software/taag/#p=display&f=ANSI Shadow&t=REDUX

    console.info('██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗');
    console.info('██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝');
    console.info('██████╔╝█████╗  ██║  ██║██║   ██║ ╚███╔╝ ');
    console.info('██╔══██╗██╔══╝  ██║  ██║██║   ██║ ██╔██╗ ');
    console.info('██║  ██║███████╗██████╔╝╚██████╔╝██╔╝ ██╗');
    console.info('╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝');
    console.info('                                         ');
    console.info('Use redux directly: ');
    console.info("  store.dispatch(fetchSubreddits('reactjs'))");
    console.info('  store.getState()');
  }

  return store;
};

// const enhancers = [];
// const middleware = [logger];

// if (process.env.NODE_ENV === 'development') {
//   const REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION__';

//   // console.info(process.env.NODE_ENV);
//   const devToolsExtension =
//     ((window as any)[REDUX_DEV_TOOLS] && (window as any)[REDUX_DEV_TOOLS]()) ||
//     compose;
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension);
//   }
// }

// export const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// );

// export const configureStore = () => {
//   const persistedState = loadState();
//   const store = createStore(rootReducer, persistedState, composedEnhancers);
//   // store.subscribe(() => saveState(store.getState()));
//   // only persiste the slices of state that we want
//   store.subscribe(
//     throttle(() => {
//       saveState({ counterReducer: store.getState().counterReducer });
//     }, 1000)
//   );

//   if (process.env.NODE_ENV === 'development') {
//     // allow me to play with redux through the console
//     const W: any = window; // (window: any) = W;

//     W.store = store;
//     W.increment = increment;
//     W.decrement = decrement;

//     // http://patorjk.com/software/taag/#p=display&f=ANSI Shadow&t=REDUX

//     console.info('██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗');
//     console.info('██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝');
//     console.info('██████╔╝█████╗  ██║  ██║██║   ██║ ╚███╔╝ ');
//     console.info('██╔══██╗██╔══╝  ██║  ██║██║   ██║ ██╔██╗ ');
//     console.info('██║  ██║███████╗██████╔╝╚██████╔╝██╔╝ ██╗');
//     console.info('╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝');
//     console.info('                                         ');
//     console.info('Use redux directly: ');
//     console.info('  store.dispatch(increment())');
//     console.info('  store.dispatch(decrement())');
//   }

//   return store;
// };

export default configureStore;
