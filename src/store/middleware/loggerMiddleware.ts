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

const loggerMiddleware = ({ getState }: { getState: () => void }) => (
  next: (action: { type: string }) => void
) => (action: { type: string }) => {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    if (action.type.includes('SET')) {
      console.group(
        '%cSTATE CHANGE OCCURING',
        'font-weight: bold; font-size: 12px;color: gainsboro; text-shadow: 3px 3px 0 rgb(217,31,38) '
      );
    }

    if (action.type.includes('ERROR')) {
      console.log(
        `%c${action.type}`,
        'font-weight: bold; background: crimson;  color: gainsboro; font-family:sans-serif; font-size: 12px;'
      );
    } else {
      console.log(
        `%c${action.type}`,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 10px;'
      );
    }

    if (action.type.includes('SET')) {
      console.log(
        `%cSTATE CHANGE - PREV STATE: `,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 12px;',
        getState()
      );

      // console.groupEnd();
    }
    next(action);
    if (action.type.includes('SET')) {
      console.log(
        `%cSTATE CHANGE - NEXT STATE: `,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 12px;',
        getState()
      );
      // console.groupEnd();
    }
    if (action.type.includes('SET')) {
      console.groupEnd();
    }
    // console.log('%c' + action.type, 'background: #107896; color:white');
    // console.log('%cThis is a green text', 'background: green; color: white');
    // console.log('%cThis is a green text', 'background: red; color: white');

    // console.log(JSON.stringify(action, null, '╴╴╴'));
    // console.log(JSON.stringify(action));

    // console.log("NEXT STATE: ");
  } else {
    next(action);
  }
};
export default loggerMiddleware;
