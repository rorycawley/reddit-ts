import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { apiGET } from '../api/common';
import { querySubredditsURL as fetchSubredditsURL } from '../api/reddit';

// ____ ____ ___ _ ____ _  _ ____
// |__| |     |  | |  | |\ | [__
// |  | |___  |  | |__| | \| ___]
const SUBREDDITS = '[Subreddits]';
export const FETCH_SUBREDDITS = `${SUBREDDITS} FETCH_SUBREDDITS`;
export const SET_SUBREDDITS = `${SUBREDDITS} SET_SUBREDDITS`;
export const QUERY_SUBREDDITS_SUCCESS = `${SUBREDDITS} QUERY_SUBREDDITS_SUCCESS`;
export const QUERY_SUBREDDITS_FAILURE = `${SUBREDDITS} QUERY_SUBREDDITS_FAILURE`; // action to get subreddits

// ____ ____ ___ _ ____ _  _    ____ ____ ____ ____ ___ ____ ____ ____
// |__| |     |  | |  | |\ |    |    |__/ |___ |__|  |  |  | |__/ [__
// |  | |___  |  | |__| | \|    |___ |  \ |___ |  |  |  |__| |  \ ___]
export interface FetchSubredditsAction {
  type: string;
  payload: { subreddit: string };
}
export interface SetSubredditsAction {
  type: string;
  payload: { subreddits: any[] };
  meta: { normalizeKey: string; feature: string };
}
export interface QuerySubredditsSuccess {
  type: string;
  payload: { subreddits: any[] };
}
export interface QuerySubredditsFailure {
  type: string;
  error: boolean;
}

export type SubredditActionTypes =
  | FetchSubredditsAction
  | SetSubredditsAction
  | QuerySubredditsSuccess
  | QuerySubredditsFailure;

export const fetchSubreddits = (subreddit: string): SubredditActionTypes => ({
  type: FETCH_SUBREDDITS,
  payload: { subreddit }
});

export const setSubreddits = ({
  subreddits,
  normalizeKey = 'name'
}: {
  subreddits: any[];
  normalizeKey: string;
}): SubredditActionTypes => ({
  type: SET_SUBREDDITS,
  payload: { subreddits },
  meta: { normalizeKey, feature: SUBREDDITS }
});

// action to give subreddits response
export const querySubredditsSuccess = (
  subreddits: any[]
): SubredditActionTypes => ({
  type: QUERY_SUBREDDITS_SUCCESS,
  payload: { subreddits }
});

export const querySubredditsFailure = (): SubredditActionTypes => ({
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
  action: SubredditActionTypes
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
function* fetchSubredditsWorker({
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
      url: fetchSubredditsURL(payload.subreddit),
      method: 'GET',
      feature: SUBREDDITS,
      body: null,
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
  yield takeEvery(FETCH_SUBREDDITS, fetchSubredditsWorker);
}

export const subredditsSagas = [fork(watchSubredditsRequest)];
