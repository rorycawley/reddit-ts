/* eslint-disable handle-callback-err */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/expect-expect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'whatwg-fetch';
import { storeSpy, expectRedux } from 'expect-redux';
import { all, put, call } from 'redux-saga/effects';

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
import { server, rest } from 'tests/utils/setupMSW';
import {
  QUERY_SUBREDDITS_REQUEST,
  QUERY_SUBREDDITS_SUCCESS,
  QUERY_SUBREDDITS_FAILURE,
  querySubreddits,
  querySubredditsSuccess,
  querySubredditsFailure,
  subredditsReducer,
  subredditsSagas
} from 'src/store/subreddits';
import { querySubredditsURL } from 'src/api/reddit';

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

function* rootSaga() {
  yield all([...subredditsSagas]);
}

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
    store.dispatch(querySubreddits(subreddit));

  // it.skip('test a response from network', async () => {
  //   const url = querySubredditsURL('reactjs');

  //   const result = await apiGET(url);
  //   // expect(result.ok).toBeTruthy();
  //   const json = await result.json();

  //   // console.log('real response: ');
  //   // console.log(JSON.stringify(json, null, '  '));
  // });

  // it.skip('test MSW a successful response', async () => {
  //   const testResponse = reactjsSubreddits;
  //   const url = querySubredditsURL('reactjs');
  //   server.use(
  //     rest.get(url, (req, res, context) => {
  //       return res(context.status(200), context.json(testResponse));
  //     })
  //   );

  //   const result = await apiGET(url);
  //   expect(result.ok).toBeTruthy();
  //   const json = await result.json();

  //   // console.log(JSON.stringify(json, null, '  '));
  // });

  // it.skip('test MSW a failed response', async () => {
  //   const testResponse = reactjsSubreddits;
  //   const url = querySubredditsURL('reactjs');
  //   server.use(
  //     rest.get(url, (req, res, context) => {
  //       console.log('MSW got response');
  //       return res(context.status(500), context.json({ error: 'error' }));
  //     })
  //   );

  //   const result = await apiGET(url);
  //   console.log(JSON.stringify(result, null, '  '));

  //   expect(result.ok).toBeFalsy();

  //   const json = await result.json();

  //   console.log(JSON.stringify(json, null, '  '));
  // });

  it('does a subreddit query request and fails', () => {
    const url = querySubredditsURL('reactjs');
    server.use(
      rest.get(url, (req, res, context) => {
        console.log('MSW sent response');
        return res(context.status(500), context.json({ error: 'error' }));
      })
    );
    dispatchRequest('reactjs');
    return expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: QUERY_SUBREDDITS_FAILURE,
        error: 'Failed to obtain subreddits query response'
      });
  });

  // {"type":"[Subreddits] QUERY_SUBREDDITS_FAILURE","payload":{"error":{}}}
  it('does a subreddit query request and succeeds', () => {
    const testResponse = reactjsSubreddits;
    const url = querySubredditsURL('reactjs');
    server.use(
      rest.get(url, (req, res, context) => {
        // console.log('MSW sent response');
        return res(context.status(200), context.json(testResponse));
      })
    );

    // store.dispatch(querySubreddits('reactjs'));
    dispatchRequest('reactjs');
    return expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: QUERY_SUBREDDITS_SUCCESS,
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
      subreddits: []
    });
  });
});
