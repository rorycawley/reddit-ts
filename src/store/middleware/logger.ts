import { Dispatch, Middleware, MiddlewareAPI, AnyAction } from 'redux';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger: Middleware = (api: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('state after dispatch', api.getState());
  console.groupEnd();

  return result;
};
export default logger;
