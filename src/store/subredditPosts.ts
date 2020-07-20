/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { apiGET } from '../api/common';
import { getSubredditPostsURL } from '../api/reddit';
import { SagaIterator } from 'redux-saga';
import { setLoader } from './ui';

// ____ ____ ___ _ ____ _  _ ____
// |__| |     |  | |  | |\ | [__
// |  | |___  |  | |__| | \| ___]
const SUBREDDITS_POSTS = '[SubredditPosts]';
export const FETCH_SUBREDDIT_POSTS = `${SUBREDDITS_POSTS} FETCH_SUBREDDIT_POSTS`;
export const SET_SUBREDDIT_POSTS = `${SUBREDDITS_POSTS} SET_SUBREDDIT_POSTS`;
export const QUERY_SUBREDDIT_POSTS_SUCCESS = `${SUBREDDITS_POSTS} QUERY_SUBREDDIT_POSTS_SUCCESS`;
export const QUERY_SUBREDDIT_POSTS_ERROR = `${SUBREDDITS_POSTS} QUERY_SUBREDDIT_POSTS_ERROR`;

// ____ ____ ___ _ ____ _  _    ____ ____ ____ ____ ___ ____ ____ ____
// |__| |     |  | |  | |\ |    |    |__/ |___ |__|  |  |  | |__/ [__
// |  | |___  |  | |__| | \|    |___ |  \ |___ |  |  |  |__| |  \ ___]
export interface FetchSubredditPostsAction {
  type: string;
  payload: { subreddit: string };
}
export interface SetSubredditPostsAction {
  type: string;
  payload: { posts: unknown[] };
  meta: { dataNormalized: boolean; feature: string };
}
export interface QuerySubredditPostsSuccess {
  type: string;
  error: boolean;
}
export interface QuerySubredditPostsError {
  type: string;
  error: boolean;
}

export type SubredditPostsActionTypes =
  | FetchSubredditPostsAction
  | SetSubredditPostsAction
  | QuerySubredditPostsSuccess
  | QuerySubredditPostsError;

export const fetchSubredditPosts = (
  subreddit: string
): SubredditPostsActionTypes => ({
  type: FETCH_SUBREDDIT_POSTS,
  payload: { subreddit }
});

export const setSubredditPosts = (
  posts: unknown[],
  dataNormalized: boolean
): SubredditPostsActionTypes =>
  ({
    type: SET_SUBREDDIT_POSTS,
    payload: { posts },
    meta: { dataNormalized, feature: SUBREDDITS_POSTS }
  } as SetSubredditPostsAction);

// action to give subreddits response
export const querySubredditPostsSuccess = (): SubredditPostsActionTypes => ({
  type: QUERY_SUBREDDIT_POSTS_SUCCESS,
  error: false
});

export const querySubredditPostsError = (): SubredditPostsActionTypes => ({
  type: QUERY_SUBREDDIT_POSTS_ERROR,
  error: true
});

// ____ ____ ___  _  _ ____ ____ ____
// |__/ |___ |  \ |  | |    |___ |__/
// |  \ |___ |__/ |__| |___ |___ |  \
export interface SubredditPostsState {
  readonly posts: unknown[];
  readonly error?: boolean;
}

const initialSubredditPostsState: SubredditPostsState = { posts: [] };

export const subredditsReducer = (
  state = initialSubredditPostsState,
  action: SubredditPostsActionTypes
): SubredditPostsState => {
  switch (action.type) {
    case SET_SUBREDDIT_POSTS:
      // console.log('updating reducer');
      // console.log(action);
      return {
        ...state,
        posts: (action as SetSubredditPostsAction).payload.posts
      };
    default:
      return state;
  }
};

// ____ ____ ____ ____ ____
// [__  |__| | __ |__| [__
// ___] |  | |__] |  | ___]
function* fetchSubredditPostsWorker({
  payload: { subreddit }
}: FetchSubredditPostsAction): SagaIterator {
  // yield put({ type: 'GETTING_SUBREDDIT_POSTS' });
  yield put(setLoader({ loading: true }, SUBREDDITS_POSTS));

  try {
    console.log('fetchSubredditPostsWorker', subreddit);
    const result = yield call(apiGET, {
      url: fetchSubredditPostsURL(subreddit),
      method: 'GET',
      feature: SUBREDDITS_POSTS,
      body: null,
      timeout: 7000
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!result.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new Error(result.status);
    }

    yield put(querySubredditPostsSuccess());

    const json = yield call([result, 'json']);

    // console.log(JSON.stringify(json.subreddits, null, "  "));
    // console.log(JSON.stringify(querySubredditPostsSuccess(json)));
    // yield put(querySubredditPostsSuccess(json.subreddits));
    // console.log('These are the json subreddits', json.subreddits);
    // console.log('my answer', setSubredditPosts(json.subreddits));
    yield put(setSubredditPosts(json.posts, false));
  } catch (error) {
    // console.log(querySubredditPostsFailure(error));
    yield put(querySubredditPostsError());
  }

  yield put(setLoader({ loading: false }, SUBREDDITS_POSTS));
}

function* watchSubredditPostsRequest(): SagaIterator {
  yield takeLatest(FETCH_SUBREDDIT_POSTS, fetchSubredditPostsWorker);
}

export const subredditsSagas = [fork(watchSubredditPostsRequest)];
