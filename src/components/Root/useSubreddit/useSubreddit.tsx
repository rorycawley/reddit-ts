/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import { useContext } from 'react';

import createCtx from './createCtx';

export const initialState = { payload: 'all' };

type AppState = typeof initialState;
type Action = { type: 'SET_SUBREDDIT'; payload: string };

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      return { payload: action.payload };
    default:
      throw new Error();
  }
};

const [ctx, SubredditProvider] = createCtx(reducer, initialState);
export const SubredditContext = ctx;

export default SubredditProvider;

export const useSubreddit = () => useContext(SubredditContext);
