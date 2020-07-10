import counterReducer, {
  initialCounterState,
  increment,
  decrement
} from './counter';
import { CounterState } from './types';
export default counterReducer;
export { initialCounterState, increment, decrement };
export type { CounterState };
