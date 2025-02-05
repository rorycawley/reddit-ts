import { Middleware, AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import { UiActionTypes } from '../ui';

const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  const env = process.env.NODE_ENV;
  const type = action.type as string;

  console.log(action);
  if (env === 'development') {
    // https://www.telerik.com/blogs/how-to-style-console-log-contents-in-chrome-devtools
    if (type.includes('FETCH')) {
      console.log(
        `%c${type}`,
        'font-weight: bold; background: blue;  color: gainsboro; font-family:sans-serif; font-size: 12px;'
      );
    } else if (type.includes('SET_LOADER')) {
      console.group(
        `%c${type} ` +
          ((action as UiActionTypes).payload.loading ? '🔄' : '👌'),
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 10px;'
      );
    } else if (type.includes('SET')) {
      console.group(
        '%cSTATE CHANGE OCCURING',
        'font-weight: bold; font-size: 12px;color: gainsboro; text-shadow: 3px 3px 0 rgb(217,31,38) '
      );
    } else if (type.includes('SUCCESS')) {
      console.log(
        `%c${type}`,
        'font-weight: bold; background: green;  color: gainsboro; font-family:sans-serif; font-size: 10px;'
      );
    } else if (type.includes('ERROR')) {
      console.log(
        `%c${type}`,
        'font-weight: bold; background: crimson;  color: gainsboro; font-family:sans-serif; font-size: 12px;'
      );
    } else {
      console.log(
        `%c${type}`,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 10px;'
      );
    }

    if (type.includes('SET')) {
      console.log(
        `%cSTATE CHANGE - PREV STATE: `,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 12px;',
        getState()
      );
    }

    next(action);

    if (type.includes('SET')) {
      console.log(
        `%cSTATE CHANGE - NEXT STATE: `,
        'font-weight: bold; color: gainsboro; font-family:sans-serif; font-size: 12px;',
        getState()
      );
    }
    if (type.includes('SET')) {
      console.groupEnd();
    }
  } else {
    next(action);
  }
};
export default loggerMiddleware;
