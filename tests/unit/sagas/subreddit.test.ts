/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'whatwg-fetch';
import { storeSpy, expectRedux } from 'expect-redux';
import {
  StoreEnhancer,
  Store,
  applyMiddleware,
  compose,
  createStore,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StoreWithSpy } from 'expect-redux/dist/storeSpy';
import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { server, rest } from 'tests/utils/setupMSW';

const GET_SUBREDDITS_REQUEST = 'QUERY_SUBREDDITS';
const GET_SUBREDDITS_SUCCESS = 'QUERY_SUBREDDITS_SUCCESS';
const GET_SUBREDDITS_FAILURE = 'QUERY_SUBREDDITS_FAILURE'; // action to get subreddits

// action to get subreddits
const getSubreddits = (subreddit: string) => ({
  type: GET_SUBREDDITS_REQUEST,
  payload: { subreddit }
});

// action to give subreddits response
const getSubredditsSuccess = (subreddits: any[]) => {
  console.log(
    JSON.stringify({
      type: GET_SUBREDDITS_SUCCESS,
      payload: { subreddits }
    })
  );
  return {
    type: GET_SUBREDDITS_SUCCESS,
    payload: { subreddits }
  };
};

const getSubredditsFailure = (error: any) => ({
  type: GET_SUBREDDITS_FAILURE,
  payload: { error }
});

const subredditsReducer = (state = initialStateSubreddits, action: any) => {
  switch (action.type) {
    case GET_SUBREDDITS_SUCCESS:
      return { ...state, subreddits: action.payload.subreddits, error: '' };
    case GET_SUBREDDITS_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

const configureStore = (storeEnhancers: StoreEnhancer[] = []) => {
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({ subreddits: subredditsReducer });
  const store = createStore(
    (state, _) => state,
    compose(...[applyMiddleware(sagaMiddleware), ...storeEnhancers])
  ) as Store;

  sagaMiddleware.run(rootSaga);
  return store;
};

function* getSubredditsWorker({
  type,
  payload
}: {
  type: string;
  payload: any;
}) {
  // yield put({ type: 'GETTING_SUBREDDITS' });
  try {
    // const result = yield call(getSubredditsAPI, action.payload.subreddit);

    const result = yield call(apiGET, getSubredditsURL(payload.subreddit));

    const json = yield call([result, 'json']);
    // console.log(JSON.stringify(json.subreddits, null, "  "));
    // console.log(JSON.stringify(getSubredditsSuccess(json)));
    yield put(getSubredditsSuccess(json.subreddits));
  } catch (error) {
    yield put(getSubredditsFailure(error));
  }
}

function* watchSubredditsRequest() {
  yield takeEvery(GET_SUBREDDITS_REQUEST, getSubredditsWorker);
}

const subredditsSagas = [fork(watchSubredditsRequest)];

function* rootSaga() {
  yield all([...subredditsSagas]);
}

// TODO redo this
const getSubredditsURL = (subreddit: string): string =>
  `https://www.reddit.com/api/subreddit_autocomplete.json?query=${subreddit}&include_over_18=0&include_profiles=0`;

// TODO redo
const apiGET = (url: string): Promise<Response> => window.fetch(url);

// reducers
const initialStateSubreddits = { subreddits: [], error: '' };

describe('get subredits', () => {
  let store: Store;

  const noSubreddits = { subreddits: [] };
  const reactjsSubreddits = {
    subreddits: [
      {
        numSubscribers: 200191,
        name: 'reactjs',
        allowedPostTypes: {
          images: false,
          text: true,
          videos: true,
          links: true,
          spoilers: true
        },
        id: 't5_2zldd',
        primaryColor: '#014980',
        communityIcon:
          'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png',
        icon: ''
      },
      {
        numSubscribers: 1154,
        name: 'ReactJSLearn',
        allowedPostTypes: {
          images: true,
          text: true,
          videos: true,
          links: true,
          spoilers: true
        },
        id: 't5_3iadr',
        primaryColor: '',
        communityIcon: '',
        icon: ''
      },
      {
        numSubscribers: 538,
        name: 'reactjsdevelopers',
        allowedPostTypes: {
          images: true,
          text: true,
          videos: true,
          links: true,
          spoilers: true
        },
        id: 't5_3e9j3',
        primaryColor: '',
        communityIcon: '',
        icon: ''
      },
      {
        numSubscribers: 1750,
        name: 'reactjs_beginners',
        allowedPostTypes: {
          images: true,
          text: true,
          videos: true,
          links: true,
          spoilers: true
        },
        id: 't5_3c0ga',
        primaryColor: '',
        communityIcon: '',
        icon: ''
      }
    ]
  };

  beforeEach(() => {
    store = configureStore([storeSpy as StoreEnhancer]);
  });

  const dispatchRequest = (subreddit: string) =>
    store.dispatch(getSubreddits(subreddit));

  it('test a response from network', async () => {
    const url = getSubredditsURL('reactjs');

    const result = await apiGET(url);
    // expect(result.ok).toBeTruthy();
    const json = await result.json();

    console.log('real response: ');
    console.log(JSON.stringify(json, null, '  '));
  });

  it('test a response', async () => {
    const testResponse = reactjsSubreddits;
    const url = getSubredditsURL('reactjs');
    server.use(
      rest.get(url, (req, res, context) => {
        return res(context.status(200), context.json(testResponse));
      })
    );

    const result = await apiGET(url);
    expect(result.ok).toBeTruthy();
    const json = await result.json();

    console.log(JSON.stringify(json, null, '  '));
  });

  it('does a subreddit query request and succeeds', () => {
    const testResponse = reactjsSubreddits;
    const url = getSubredditsURL('reactjs');
    server.use(
      rest.get(url, (req, res, context) => {
        console.log('MSW got response');
        return res(context.status(200), context.json(testResponse));
      })
    );

    // store.dispatch(getSubreddits('reactjs'));
    dispatchRequest('reactjs');
    return expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: GET_SUBREDDITS_SUCCESS,
        payload: {
          subreddits: [
            {
              numSubscribers: 200191,
              name: 'reactjs',
              allowedPostTypes: {
                images: false,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_2zldd',
              primaryColor: '#014980',
              communityIcon:
                'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png',
              icon: ''
            },
            {
              numSubscribers: 1154,
              name: 'ReactJSLearn',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3iadr',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 538,
              name: 'reactjsdevelopers',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3e9j3',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            },
            {
              numSubscribers: 1750,
              name: 'reactjs_beginners',
              allowedPostTypes: {
                images: true,
                text: true,
                videos: true,
                links: true,
                spoilers: true
              },
              id: 't5_3c0ga',
              primaryColor: '',
              communityIcon: '',
              icon: ''
            }
          ]
        }
      });
  });

  it('returns a default state for an undefined existing state', () => {
    expect(subredditsReducer(undefined, {})).toEqual({
      subreddits: [],
      error: ''
    });
  });
});
