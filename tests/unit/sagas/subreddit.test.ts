/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/expect-expect */
import 'whatwg-fetch';
import { storeSpy, expectRedux } from 'expect-redux';

import { StoreEnhancer, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StoreWithSpy } from 'expect-redux/dist/storeSpy';
import { server, rest } from 'tests/utils/setupMSW';
import {
  QUERY_SUBREDDITS_ERROR,
  fetchSubreddits,
  subredditsReducer,
  SubredditActionTypes
} from 'src/store/subreddits';
import { configureStore } from 'src/store';
import { querySubredditsURL } from 'src/api/reddit';

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
    store.dispatch(fetchSubreddits(subreddit));

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
  describe('subreddits reducer', () => {
    it('change state from empty to having subreddits', async () => {
      const testResponse = reactjsSubreddits;
      const url = querySubredditsURL('reactjs');
      server.use(
        rest.get(url, (req, res, context) => {
          // console.log('MSW sent response');
          return res(context.status(200), context.json(testResponse));
        })
      );

      // store.dispatch(querySubreddits('reactjs'));
      await expectRedux(store as StoreWithSpy<any, any>)
        .toHaveState()
        .matching({
          subreddits: {
            subreddits: []
          },
          ui: { loading: false }
        });

      // store.dispatch(querySubreddits('reactjs'));
      dispatchRequest('reactjs');
      await expectRedux(store as StoreWithSpy<any, any>)
        .toDispatchAnAction()
        .matching({
          type: '[Subreddits] SET_SUBREDDITS',
          payload: {
            subreddits: [
              'reactjs',
              'ReactJSLearn',
              'reactjsdevelopers',
              'reactjs_beginners'
            ]
          },
          meta: {
            dataNormalized: true,
            feature: '[Subreddits]'
          }
        });

      await expectRedux(store as StoreWithSpy<any, any>)
        .toHaveState()
        .matching({
          subreddits: {
            subreddits: [
              'reactjs',
              'ReactJSLearn',
              'reactjsdevelopers',
              'reactjs_beginners'
            ]
          },
          ui: { loading: false }
        });
    });
  });

  describe('subreddit sagas', () => {
    it('does a subreddit query request and fails', () => {
      const url = querySubredditsURL('reactjs');
      server.use(
        rest.get(url, (req, res, context) => {
          // console.log('MSW sent response');
          return res(context.status(500), context.json({ error: 'error' }));
        })
      );
      dispatchRequest('reactjs');
      return expectRedux(store as StoreWithSpy<any, any>)
        .toDispatchAnAction()
        .matching({
          type: QUERY_SUBREDDITS_ERROR,
          error: true
        });
    });

    // {"type":"[Subreddits] QUERY_SUBREDDITS_ERROR","payload":{"error":{}}}
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
          type: '[Subreddits] SET_SUBREDDITS',
          payload: {
            subreddits: [
              'reactjs',
              'ReactJSLearn',
              'reactjsdevelopers',
              'reactjs_beginners'
            ]
          },
          meta: {
            dataNormalized: true,
            feature: '[Subreddits]'
          }
        });
    });

    describe('subreddit reducer', () => {
      it('returns a default state for an undefined existing state', () => {
        expect(
          subredditsReducer(undefined, {} as SubredditActionTypes)
        ).toEqual({
          subreddits: []
        });
      });
    });
  });
});
