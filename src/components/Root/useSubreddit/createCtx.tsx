/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  Reducer,
  Dispatch,
  createContext,
  PropsWithChildren
} from 'react';
// import SubredditContext from './SubredditContext';

function createCtx<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState; // we never actually use this
  const ctx = createContext({
    state: initialState,
    dispatch: defaultDispatch // just to mock out the dispatch type and make it not optioanl
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    return <ctx.Provider value={{ state, dispatch }} {...props} />;
  }
  return [ctx, Provider] as const;
}
export default createCtx;

// export const initialState = { payload: 'all' };

// type AppState = typeof initialState;
// type Action = { type: 'SET_SUBREDDIT'; payload: string };

// export const reducer = (state: AppState, action: Action): AppState => {
//   switch (action.type) {
//     case 'SET_SUBREDDIT':
//       return { payload: action.payload };
//     default:
//       throw new Error();
//   }
// };

// const [ctx, SubredditProvider] = createCtx(reducer, initialState);
// export const SubredditContext = ctx;

// export default SubredditProvider;
// export const useSubreddit = () => useContext(SubredditContext);
