/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import * as actions from '../../actions/TodoActions';
// import * as types from '../../constants/ActionTypes';

import { rootReducer } from 'src/store';
import { increment, decrement } from 'src/store/counter';
import { INCREMENT, DECREMENT } from 'src/store/counter/types';

describe('counter redux', () => {
  describe('actions', () => {
    it('should create an increment action', () => {
      const expectedAction = {
        type: INCREMENT
      };
      expect(increment()).toEqual(expectedAction);
    });

    it('should create an decrement action', () => {
      const expectedAction = {
        type: DECREMENT
      };
      expect(decrement()).toEqual(expectedAction);
    });
  });

  describe('counter reducer', () => {
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
