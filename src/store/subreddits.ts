/* eslint-disable handle-callback-err */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { apiGET } from 'src/api/common';
import { querySubredditsURL } from 'src/api/reddit';

// ____ ____ ___ _ ____ _  _ ____
// |__| |     |  | |  | |\ | [__
// |  | |___  |  | |__| | \| ___]
const subredditsQuery = '[Subreddits]';
export const QUERY_SUBREDDITS_REQUEST = `${subredditsQuery} QUERY_SUBREDDITS`;
export const QUERY_SUBREDDITS_SUCCESS = `${subredditsQuery} QUERY_SUBREDDITS_SUCCESS`;
export const QUERY_SUBREDDITS_FAILURE = `${subredditsQuery} QUERY_SUBREDDITS_FAILURE`; // action to get subreddits

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
  error: string;
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

export const querySubredditsFailure = (
  error: any
): QuerySubredditActionTypes => ({
  type: QUERY_SUBREDDITS_FAILURE,
  error: 'Failed to obtain subreddits query response'
});

// ____ ____ ___  _  _ ____ ____ ____
// |__/ |___ |  \ |  | |    |___ |__/
// |  \ |___ |__/ |__| |___ |___ |  \
export interface SubredditsState {
  subreddits: any[];
  error?: string;
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
        error: ''
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

    const result = yield call(apiGET, querySubredditsURL(payload.subreddit));
    if (!result.ok) {
      throw new Error('Error obtaining subreddit query response');
    }

    const json = yield call([result, 'json']);

    // console.log(JSON.stringify(json.subreddits, null, "  "));
    // console.log(JSON.stringify(querySubredditsSuccess(json)));
    yield put(querySubredditsSuccess(json.subreddits));
  } catch (error) {
    // console.log(querySubredditsFailure(error));
    yield put(querySubredditsFailure(error));
  }
}

function* watchSubredditsRequest() {
  yield takeEvery(QUERY_SUBREDDITS_REQUEST, querySubredditsWorker);
}

export const subredditsSagas = [fork(watchSubredditsRequest)];
