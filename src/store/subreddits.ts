import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { apiGET } from '../api/common';
import { querySubredditsURL } from '../api/reddit';
import { SagaIterator } from 'redux-saga';
import { setLoader } from './ui';

// ____ ____ ___ _ ____ _  _ ____
// |__| |     |  | |  | |\ | [__
// |  | |___  |  | |__| | \| ___]
const SUBREDDITS = '[Subreddits]';
export const FETCH_SUBREDDITS = `${SUBREDDITS} FETCH_SUBREDDITS`;
export const SET_SUBREDDITS = `${SUBREDDITS} SET_SUBREDDITS`;
export const QUERY_SUBREDDITS_SUCCESS = `${SUBREDDITS} QUERY_SUBREDDITS_SUCCESS`;
export const QUERY_SUBREDDITS_ERROR = `${SUBREDDITS} QUERY_SUBREDDITS_ERROR`;

// ____ ____ ___ _ ____ _  _    ____ ____ ____ ____ ___ ____ ____ ____
// |__| |     |  | |  | |\ |    |    |__/ |___ |__|  |  |  | |__/ [__
// |  | |___  |  | |__| | \|    |___ |  \ |___ |  |  |  |__| |  \ ___]
export interface FetchSubredditsAction {
  type: string;
  payload: { subreddit: string };
}
export interface SetSubredditsAction {
  type: string;
  payload: { subreddits: unknown[] };
  meta: { dataNormalized: boolean; feature: string };
}
export interface QuerySubredditsSuccess {
  type: string;
  error: boolean;
}
export interface QuerySubredditsError {
  type: string;
  error: boolean;
}

export type SubredditActionTypes =
  | FetchSubredditsAction
  | SetSubredditsAction
  | QuerySubredditsSuccess
  | QuerySubredditsError;

export const fetchSubreddits = (subreddit: string): SubredditActionTypes => ({
  type: FETCH_SUBREDDITS,
  payload: { subreddit }
});

export const setSubreddits = (
  subreddits: unknown[],
  dataNormalized: boolean
): SubredditActionTypes =>
  ({
    type: SET_SUBREDDITS,
    payload: { subreddits },
    meta: { dataNormalized, feature: SUBREDDITS }
  } as SetSubredditsAction);

// action to give subreddits response
export const querySubredditsSuccess = (): SubredditActionTypes => ({
  type: QUERY_SUBREDDITS_SUCCESS,
  error: false
});

export const querySubredditsError = (): SubredditActionTypes => ({
  type: QUERY_SUBREDDITS_ERROR,
  error: true
});

// ____ ____ ___  _  _ ____ ____ ____
// |__/ |___ |  \ |  | |    |___ |__/
// |  \ |___ |__/ |__| |___ |___ |  \
export interface SubredditsState {
  readonly subreddits: unknown[];
  readonly error?: boolean;
}

const initialSubredditsState: SubredditsState = { subreddits: [] };

export const subredditsReducer = (
  state = initialSubredditsState,
  action: SubredditActionTypes
): SubredditsState => {
  switch (action.type) {
    case SET_SUBREDDITS:
      // console.log('updating reducer');
      // console.log(action);
      return {
        ...state,
        subreddits: (action as SetSubredditsAction).payload.subreddits
      };
    default:
      return state;
  }
};

// ____ ____ ____ ____ ____
// [__  |__| | __ |__| [__
// ___] |  | |__] |  | ___]
function* fetchSubredditsWorker({
  payload: { subreddit }
}: FetchSubredditsAction): SagaIterator {
  // yield put({ type: 'GETTING_SUBREDDITS' });
  yield put(setLoader({ loading: true }, SUBREDDITS));

  try {
    // const result = yield call(querySubredditsAPI, action.payload.subreddit);
    // const result: ReturnType<typeof apiGET> = yield call(apiGET, {
    //   url: fetchSubredditsURL(subreddit),
    //   method: 'GET',
    //   feature: SUBREDDITS,
    //   body: null,
    //   timeout: 7000
    // });

    console.log('fetchSubredditsWorker', subreddit);
    const result = yield call(apiGET, {
      url: querySubredditsURL(subreddit),
      method: 'GET',
      feature: SUBREDDITS,
      body: null,
      timeout: 7000
    });

    if (!result.ok) {
      throw new Error(result.status);
    }

    yield put(querySubredditsSuccess());

    const json = yield call([result, 'json']);

    // console.log(JSON.stringify(json.subreddits, null, "  "));
    // console.log(JSON.stringify(querySubredditsSuccess(json)));
    // yield put(querySubredditsSuccess(json.subreddits));
    // console.log('These are the json subreddits', json.subreddits);
    // console.log('my answer', setSubreddits(json.subreddits));
    yield put(setSubreddits(json.subreddits, false));
  } catch (error) {
    // console.log(querySubredditsFailure(error));
    yield put(querySubredditsError());
  }

  yield put(setLoader({ loading: false }, SUBREDDITS));
}

function* watchSubredditsRequest(): SagaIterator {
  yield takeLatest(FETCH_SUBREDDITS, fetchSubredditsWorker);
}

export const subredditsSagas = [fork(watchSubredditsRequest)];
