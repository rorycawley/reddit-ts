import { useContext } from 'react';

import createCtx from './createCtx';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const SET_SELECTED_SUBREDDIT = `[CONTEXT] SET_SELECTED_SUBREDDIT`;

export interface SelectedSubredditState {
  readonly selectedSubreddit: string;
}
export const initialContextState: SelectedSubredditState = {
  selectedSubreddit: 'all'
};

interface Action {
  type: string;
}

export interface ChangeSelectedSubredditAction extends Action {
  payload: SelectedSubredditState;
}

export const changeSelectedSubreddit = (
  selectedSubreddit: string
): ChangeSelectedSubredditAction => ({
  type: SET_SELECTED_SUBREDDIT,
  payload: { selectedSubreddit }
});

export type SelectSubredditActionTypes = ChangeSelectedSubredditAction;

export const reducer = (
  state: SelectedSubredditState,
  action: SelectSubredditActionTypes
): SelectedSubredditState => {
  switch (action.type) {
    case SET_SELECTED_SUBREDDIT:
      if (process.env.NODE_ENV === 'development') {
        console.info(
          `%c${SET_SELECTED_SUBREDDIT}: "${action.payload.selectedSubreddit}"`,
          'font-weight: bold;font-family:sans-serif; color: lime; font-size: 12px'
        );
      }
      return { ...state, selectedSubreddit: action.payload.selectedSubreddit };
    default:
      throw new Error(
        `Context reducer useSelectedSubreddit given incorrect action: ${action.type}`
      );
  }
};

const [ctx, SubredditProvider] = createCtx(reducer, initialContextState);
export const SubredditContext = ctx;

export default SubredditProvider;

export const useSelectedSubreddit: () => {
  state: SelectedSubredditState;
  dispatch: React.Dispatch<ChangeSelectedSubredditAction>;
} = (): {
  state: SelectedSubredditState;
  dispatch: React.Dispatch<ChangeSelectedSubredditAction>;
} => {
  const context = useContext(SubredditContext);
  if (context === undefined) {
    throw new Error(
      'useSelectedSubreddit must be used within a SubredditProvider'
    );
  }
  return context;
};
