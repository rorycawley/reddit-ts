/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import counterReducer, { increment, decrement } from 'src/store/counter';
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
      expect(counterReducer(undefined, { type: INCREMENT })).toEqual({
        counter: 1
      });
    });

    it('should return the update state counter = 2', () => {
      expect(counterReducer({ counter: 1 }, { type: INCREMENT })).toEqual({
        counter: 2
      });
    });

    it('should return the update state counter = -15', () => {
      expect(counterReducer({ counter: -14 }, { type: DECREMENT })).toEqual({
        counter: -15
      });
    });

    it('should return the update state counter = -29', () => {
      expect(counterReducer({ counter: -30 }, { type: INCREMENT })).toEqual({
        counter: -29
      });
    });

    it('should return the dec state counter = 0', () => {
      expect(counterReducer({ counter: 1 }, { type: DECREMENT })).toEqual({
        counter: 0
      });
    });

    it('should return the inc state counter = 0', () => {
      expect(counterReducer({ counter: -1 }, { type: INCREMENT })).toEqual({
        counter: 0
      });
    });
  });
});
