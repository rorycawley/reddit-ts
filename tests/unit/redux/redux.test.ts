/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import * as actions from '../../actions/TodoActions';
// import * as types from '../../constants/ActionTypes';

import { rootReducer, composedEnhancers } from 'src/store';
import { increment, decrement } from 'src/store/counter';
import { INCREMENT, DECREMENT } from 'src/store/counter/types';
import { createStore, Store } from 'redux';

describe('redux', () => {
  describe('persisted store', () => {
    it('should use the persisted state passed in', () => {
      const persistedState = { counterReducer: { counter: 10 } };

      const store = createStore(rootReducer, persistedState, composedEnhancers);
      expect(store.getState()).toEqual({
        counterReducer: { counter: 10 }
      });
    });
  });

  describe('store', () => {
    let store: Store;
    beforeEach(() => {
      // create a brand new store
      store = store = createStore(rootReducer, composedEnhancers);
    });

    it('should give the intial state', () => {
      // store.dispatch(increment());
      // console.info(store.getState());
      expect(store.getState()).toEqual({
        counterReducer: { counter: 0 }
      });
    });

    it('should give the intial state with increment', () => {
      store.dispatch(increment());
      // console.info(store.getState());
      expect(store.getState()).toEqual({
        counterReducer: { counter: 1 }
      });
    });

    it('should give the intial state with decrement', () => {
      store.dispatch(decrement());
      // console.info(store.getState());
      expect(store.getState()).toEqual({
        counterReducer: { counter: -1 }
      });
    });

    it('should give the correct state with several decrements', () => {
      store.dispatch(decrement()); // -1
      store.dispatch(decrement()); // -2
      store.dispatch(decrement()); // -3
      store.dispatch(decrement()); // -4
      store.dispatch(decrement()); // -5
      store.dispatch(decrement()); // -6
      // console.info(store.getState());
      expect(store.getState()).toEqual({
        counterReducer: {
          counter: -6
        }
      });
    });

    it('should give the correct state with several increments', () => {
      // console.log(JSON.stringify(store.getState()));
      store.dispatch(increment()); // 1
      store.dispatch(increment()); // 2
      store.dispatch(increment()); // 3
      store.dispatch(increment()); // 4
      store.dispatch(increment()); // 5
      store.dispatch(increment()); // 6
      // console.info(store.getState());
      expect(store.getState()).toEqual({
        counterReducer: {
          counter: 6
        }
      });
    });
  });

  describe('root reducer', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined, { type: INCREMENT })).toEqual({
        counterReducer: { counter: 1 }
      });
    });

    it('should return the update state counter = 2', () => {
      expect(
        rootReducer({ counterReducer: { counter: 1 } }, { type: INCREMENT })
      ).toEqual({
        counterReducer: { counter: 2 }
      });
    });

    it('should return the update state counter = -15', () => {
      expect(
        rootReducer({ counterReducer: { counter: -14 } }, { type: DECREMENT })
      ).toEqual({
        counterReducer: { counter: -15 }
      });
    });

    it('should return the update state counter = -29', () => {
      expect(
        rootReducer({ counterReducer: { counter: -30 } }, { type: INCREMENT })
      ).toEqual({
        counterReducer: { counter: -29 }
      });
    });

    it('should return the dec state counter = 0', () => {
      expect(
        rootReducer({ counterReducer: { counter: 1 } }, { type: DECREMENT })
      ).toEqual({
        counterReducer: { counter: 0 }
      });
    });

    it('should return the inc state counter = 0', () => {
      expect(
        rootReducer({ counterReducer: { counter: -1 } }, { type: INCREMENT })
      ).toEqual({
        counterReducer: { counter: 0 }
      });
    });
  });
});
