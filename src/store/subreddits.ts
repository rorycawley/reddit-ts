import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { apiGET } from '../api/common';
import { querySubredditsURL } from '../api/reddit';

// ____ ____ ___ _ ____ _  _ ____
// |__| |     |  | |  | |\ | [__
// |  | |___  |  | |__| | \| ___]
const SUBREDDITS = '[Subreddits]';
export const QUERY_SUBREDDITS_REQUEST = `${SUBREDDITS} QUERY_SUBREDDITS`;
export const QUERY_SUBREDDITS_SUCCESS = `${SUBREDDITS} QUERY_SUBREDDITS_SUCCESS`;
export const QUERY_SUBREDDITS_FAILURE = `${SUBREDDITS} QUERY_SUBREDDITS_FAILURE`; // action to get subreddits

// ____ ____ ___ _ ____ _  _    ____ ____ ____ ____ ___ ____ ____ ____
// |__| |     |  | |  | |\ |    |    |__/ |___ |__|  |  |  | |__/ [__
// |  | |___  |  | |__| | \|    |___ |  \ |___ |  |  |  |__| |  \ ___]
export interface QuerySubredditsAction {
  type: string;
  payload: { subreddit: string };
}
export interface QuerySubredditsSuccess {
  type: string;
  payload: { subreddits: any[] };
}
export interface QuerySubredditsFailure {
  type: string;
  error: boolean;
}
export type QuerySubredditActionTypes =
  | QuerySubredditsAction
  | QuerySubredditsSuccess
  | QuerySubredditsFailure;

export const querySubreddits = (
  subreddit: string
): QuerySubredditActionTypes => ({
  type: QUERY_SUBREDDITS_REQUEST,
  payload: { subreddit }
});

// action to give subreddits response
export const querySubredditsSuccess = (
  subreddits: any[]
): QuerySubredditActionTypes => ({
  type: QUERY_SUBREDDITS_SUCCESS,
  payload: { subreddits }
});

export const querySubredditsFailure = (): QuerySubredditActionTypes => ({
  type: QUERY_SUBREDDITS_FAILURE,
  error: true
});

// ____ ____ ___  _  _ ____ ____ ____
// |__/ |___ |  \ |  | |    |___ |__/
// |  \ |___ |__/ |__| |___ |___ |  \
export interface SubredditsState {
  subreddits: any[];
  error?: boolean;
}

const initialSubredditsState: SubredditsState = { subreddits: [] };

export const subredditsReducer = (
  state = initialSubredditsState,
  action: QuerySubredditActionTypes
): SubredditsState => {
  switch (action.type) {
    case QUERY_SUBREDDITS_SUCCESS:
      return {
        ...state,
        subreddits: (action as QuerySubredditsSuccess).payload.subreddits,
        error: false
      };
    case QUERY_SUBREDDITS_FAILURE:
      return { ...state, error: (action as QuerySubredditsFailure).error };
    default:
      return state;
  }
};

// ____ ____ ____ ____ ____
// [__  |__| | __ |__| [__
// ___] |  | |__] |  | ___]
function* querySubredditsWorker({
  type,
  payload
}: {
  type: string;
  payload: any;
}) {
  // yield put({ type: 'GETTING_SUBREDDITS' });
  try {
    // const result = yield call(querySubredditsAPI, action.payload.subreddit);

    const result = yield call(apiGET, {
      url: querySubredditsURL(payload.subreddit),
      body: null,
      method: 'GET',
      feature: SUBREDDITS,
      timeout: 7000
    });
    if (!result.ok) {
      throw new Error(result.status);
    }

    const json = yield call([result, 'json']);

    // console.log(JSON.stringify(json.subreddits, null, "  "));
    // console.log(JSON.stringify(querySubredditsSuccess(json)));
    yield put(querySubredditsSuccess(json.subreddits));
  } catch (error) {
    // console.log(querySubredditsFailure(error));
    yield put(querySubredditsFailure());
  }
}

function* watchSubredditsRequest() {
  yield takeEvery(QUERY_SUBREDDITS_REQUEST, querySubredditsWorker);
}

export const subredditsSagas = [fork(watchSubredditsRequest)];
