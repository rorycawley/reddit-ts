/* eslint-disable dot-notation */
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
import { loadState, saveState } from './common/localStorage';
import throttle from 'lodash/throttle';
import { all } from 'redux-saga/effects';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { UiState, uiReducer } from './ui';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchSubreddits: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store: any;
  }
}

export interface RootState {
  readonly subreddits: SubredditsState;
  readonly ui: UiState;
}

export const initialState: RootState = {
  subreddits: { subreddits: [] },
  ui: { loading: false }
};

// http://patorjk.com/software/taag/#p=display&f=ANSI Shadow&t=REDUX
// ██████╗  ██████╗  ██████╗ ████████╗    ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
// ██████╔╝██║   ██║██║   ██║   ██║       ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝
// ██╔══██╗██║   ██║██║   ██║   ██║       ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝
export const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  ui: uiReducer
});

// ██████╗  ██████╗  ██████╗ ████████╗    ███████╗ █████╗  ██████╗  █████╗
// ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔══██╗██╔════╝ ██╔══██╗
// ██████╔╝██║   ██║██║   ██║   ██║       ███████╗███████║██║  ███╗███████║
// ██╔══██╗██║   ██║██║   ██║   ██║       ╚════██║██╔══██║██║   ██║██╔══██║
// ██║  ██║╚██████╔╝╚██████╔╝   ██║       ███████║██║  ██║╚██████╔╝██║  ██║
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
function* rootSaga(): SagaIterator {
  yield all([...subredditsSagas]);
}

export const configureStore = (storeEnhancers: StoreEnhancer[] = []): Store => {
  const persistedState = loadState();
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [loggerMiddleware, sagaMiddleware, normalizeMiddleware];

  const store: Store = createStore(
    rootReducer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    persistedState as any,
    compose(...[applyMiddleware(...middlewares), ...storeEnhancers])
  );
  // store.subscribe(() => saveState(store.getState()));
  // only persiste the slices of state that we want
  store.subscribe(
    throttle(() => {
      saveState({
        subreddits: (store.getState() as SubredditsState).subreddits as string[]
      });
    }, 1000)
  );

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV === 'development') {
    // allow me to play with redux through the console
    window.fetchSubreddits = fetchSubreddits;
    window.store = store;

    console.info(
      '%cREDUX',
      'font-weight: bold; font-family:sans-serif; font-size: 100px;color: white; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
    );

    console.info(
      `%cTo use redux directly in the console use these commands: `,
      'font-weight: bold;font-family:sans-serif; color: aliceblue; font-size: 20px'
    );
    console.info(
      `%c  store.dispatch(fetchSubreddits('reactjs'))`,
      'color: floralwhite; font-family:monospace; font-size: 15px'
    );
    console.info(
      `%c  store.getState()`,
      'color: floralwhite; font-family:monospace; font-size: 15px'
    );

    console.info('');
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
