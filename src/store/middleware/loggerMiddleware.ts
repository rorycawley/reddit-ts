/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch, Middleware, MiddlewareAPI, AnyAction, Action } from 'redux';

/**
 * Logs all actions and states after they are dispatched.
 */
// const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (
//   next: Dispatch<AnyAction>
// ) => (action: AnyAction) => {
//   console.group(action.type);

//   console.log('state before dispatch', JSON.stringify(api.getState()));
//   console.info('dispatching', action);
//   const result = next(action);
//   console.log('state after dispatch', JSON.stringify(api.getState()));

//   console.groupEnd();

//   return result;
// };

const loggerMiddleware = () => (
  next: (action: { type: string }) => void
) => (action: { type: string }) => {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    console.group(action.type);

    // console.log(`${action.type}`);
    // console.log("CURRENT STATE:");
    // console.log(getState());
    if (action.type.includes('ERROR')) {
      console.log(
        `%c ${action.type}`,
        'background: red; color: white; display: block;'
      );
    } else {
      if (action.type.includes('SUCCESS')) {
        console.log(
          `%c ${action.type}`,
          'background: green; color: white; display: block;'
        );
      } else {
        console.log(
          `%c ${action.type}`,
          'background: #107896; color: white; display: block;'
        );
      }
    }
    console.log(JSON.stringify(action, null, '╴╴╴'));
    console.log(JSON.stringify(action));

    next(action);

    // console.log("NEXT STATE: ");
    // console.log(getState());
    console.groupEnd();
  } else {
    next(action);
  }
};
export default loggerMiddleware;
