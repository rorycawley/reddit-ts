/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch, Middleware, MiddlewareAPI, AnyAction, Action } from 'redux';
import { includes } from 'dist/debug/src.f69400ca';

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
    // console.group(action.type);

    if (action.type.includes('ERROR')) {
      console.log(`%c${action.type}`, 'background: red; color: white');
    } else if (action.type.includes('SUCCESS')) {
      console.log(`%c${action.type}`, 'background: green; color: white');
    } else if (action.type.includes('SET')) {
      console.log(`%c${action.type}`, 'background: orange; color: white');
    } else if (action.type.includes('NORMALIZING')) {
      console.log(`%c${action.type}`, 'background: pink; color: brown');
    } else {
      console.log(`%c${action.type}`, 'background: #107896; color: white');
    }
    // console.groupEnd();
    // console.log('%c' + action.type, 'background: #107896; color:white');
    // console.log('%cThis is a green text', 'background: green; color: white');
    // console.log('%cThis is a green text', 'background: red; color: white');

    // console.log(JSON.stringify(action, null, '╴╴╴'));
    // console.log(JSON.stringify(action));

    next(action);

    // console.log("NEXT STATE: ");
    // console.log(getState());
  } else {
    next(action);
  }
};
export default loggerMiddleware;
