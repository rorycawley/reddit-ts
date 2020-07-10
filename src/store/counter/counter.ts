import {
  INCREMENT,
  DECREMENT,
  CounterActionTypes,
  CounterState
} from './types';

// Actions
export const increment = (): CounterActionTypes => ({
  type: INCREMENT
});

export const decrement = (): CounterActionTypes => ({ type: DECREMENT });

// reducer
export const initialCounterState: CounterState = {
  counter: 0
};

const counterReducer = (
  state = initialCounterState,
  action: CounterActionTypes
): CounterState => {
  // console.log('counterReducer: ' + JSON.stringify(state));
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
