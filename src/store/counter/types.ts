export interface CounterState {
  counter: number;
}

const counter = '[Counter]';

export const INCREMENT = `${counter} INCREMENT`;
export const DECREMENT = `${counter} DECREMENT`;
export interface IncrementAction {
  type: string;
}
export interface DecrementAction {
  type: string;
}

export type CounterActionTypes = IncrementAction | DecrementAction;
