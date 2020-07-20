/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { storeSpy, expectRedux } from 'expect-redux';
import { StoreEnhancer, Store } from 'redux';
import { configureStore } from 'src/store';
import { Provider } from 'react-redux';
import React from 'react';
import { server, rest } from 'tests/utils/setupMSW';

import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor
} from '@testing-library/react';
import SearchBar from 'src/components/Root/SearchBar';
import { StoreWithSpy } from 'expect-redux/dist/storeSpy';
// import { querySubredditsURL } from 'src/api/reddit';

// const irelandSubreddits = {
//   subreddits: [
//     {
//       numSubscribers: 287677,
//       name: 'ireland',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_2qhb9',
//       primaryColor: '#00725f',
//       communityIcon: '',
//       icon:
//         'https://b.thumbs.redditmedia.com/MUI-HukVZzYG2eNButTBJOrOxqCXwRtRIvzwKuYzp3o.png'
//     },
//     {
//       numSubscribers: 912,
//       name: 'IrelandGaming',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3itw1',
//       primaryColor: '#bbbdbf',
//       communityIcon: '',
//       icon:
//         'https://b.thumbs.redditmedia.com/DwlkGDFaU6o9WX_0AZoOLtUFj7fAAhQ081LpZRia1Xg.png'
//     },
//     {
//       numSubscribers: 5908,
//       name: 'IrelandBaldwin',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_2vloo',
//       primaryColor: '',
//       communityIcon: '',
//       icon:
//         'https://a.thumbs.redditmedia.com/IC0mejkWqT4Z1Wd-MMffGm_p-yNp_6ScpHqmPOQL148.png'
//     },
//     {
//       numSubscribers: 300,
//       name: 'IrelandIncorrectlyUK',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_21s7xl',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 191,
//       name: 'IrelandR4R',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_31r3i',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 5835,
//       name: 'IrelandPics',
//       allowedPostTypes: {
//         images: true,
//         text: false,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3616f',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 4981,
//       name: 'IrelandonReddit',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3odcd',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 120,
//       name: 'IrelandSimpsonsFans',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_utius',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     }
//   ]
// };
// const reactjsSubreddits = {
//   subreddits: [
//     {
//       numSubscribers: 201304,
//       name: 'reactjs',
//       allowedPostTypes: {
//         images: false,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_2zldd',
//       primaryColor: '#014980',
//       communityIcon:
//         'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png',
//       icon: ''
//     },
//     {
//       numSubscribers: 1158,
//       name: 'ReactJSLearn',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3iadr',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 542,
//       name: 'reactjsdevelopers',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3e9j3',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     },
//     {
//       numSubscribers: 1753,
//       name: 'reactjs_beginners',
//       allowedPostTypes: {
//         images: true,
//         text: true,
//         videos: true,
//         links: true,
//         spoilers: true
//       },
//       id: 't5_3c0ga',
//       primaryColor: '',
//       communityIcon: '',
//       icon: ''
//     }
//   ]
// };
// const testResponse = reactjsSubreddits;
// const reactjsUrl = querySubredditsURL('reactjs');
// const irelandUrl = querySubredditsURL('ireland');

describe('SearchBar', () => {
  let store: Store;

  beforeEach(() => {
    store = configureStore([storeSpy as StoreEnhancer]);

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  }); // Default on import: runs it after each test.

  it('does a search for reduxjs and populates the drowdown with the results', async () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    const input = screen.getByLabelText('Search for subreddits...');
    fireEvent.change(input, {
      target: {
        value: 'reactjs'
      }
    });

    // check the input box is set to 'reactjs'
    expect(screen.getByRole('textbox')).toHaveValue('reactjs');

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] FETCH_SUBREDDITS',
        payload: { subreddit: 'reactjs' }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: true },
        meta: { feature: '[Subreddits]' }
      });

    // screen.debug();
    expect(screen.getByText('Loading…')).toBeInTheDocument();
    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] QUERY_SUBREDDITS_SUCCESS',
        error: false
      });
    expect(await screen.findByText('reactjsdevelopers')).toBeTruthy();

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
        ui: {
          loading: false
        }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: false },
        meta: { feature: '[Subreddits]' }
      });

    expect(screen.queryByText('Loading…')).toBeNull();
    expect(await screen.findByText(/reactjsdevelopers/i)).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(4);
    expect(screen.getByText('ReactJSLearn')).toBeInTheDocument();
    expect(screen.getByText('reactjsdevelopers')).toBeInTheDocument();
    expect(screen.getByText('reactjs_beginners')).toBeInTheDocument();
    // console.log(items);
    // screen.debug();
  });

  it('does a search for reduxjs and then to ireland populates the drowdown with the results', async () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    const input = screen.getByLabelText('Search for subreddits...');
    fireEvent.change(input, {
      target: {
        value: 'reactjs'
      }
    });

    // check the input box is set to 'reactjs'
    expect(screen.getByRole('textbox')).toHaveValue('reactjs');

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] FETCH_SUBREDDITS',
        payload: { subreddit: 'reactjs' }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: true },
        meta: { feature: '[Subreddits]' }
      });

    // screen.debug();
    expect(screen.getByText('Loading…')).toBeInTheDocument();
    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] QUERY_SUBREDDITS_SUCCESS',
        error: false
      });
    expect(await screen.findByText('reactjsdevelopers')).toBeTruthy();

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
        ui: {
          loading: false
        }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: false },
        meta: { feature: '[Subreddits]' }
      });

    expect(screen.queryByText('Loading…')).toBeNull();
    expect(await screen.findByText(/reactjsdevelopers/i)).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(4);
    expect(screen.getByText('ReactJSLearn')).toBeInTheDocument();
    expect(screen.getByText('reactjsdevelopers')).toBeInTheDocument();
    expect(screen.getByText('reactjs_beginners')).toBeInTheDocument();

    // console.log(items);
    // screen.debug();

    // change to search for ireland
    fireEvent.change(input, {
      target: {
        value: 'ireland'
      }
    });

    // // check the input box is set to 'reactjs'
    expect(screen.getByRole('textbox')).toHaveValue('ireland');

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] FETCH_SUBREDDITS',
        payload: { subreddit: 'ireland' }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: true },
        meta: { feature: '[Subreddits]' }
      });

    // expect(screen.getByText('Loading…')).toBeInTheDocument();
    expect(await screen.findByText('Loading…')).toBeTruthy();

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] QUERY_SUBREDDITS_SUCCESS',
        error: false
      });

    // screen.debug();
    expect(await screen.findByText('IrelandBaldwin')).toBeTruthy();

    await expectRedux(store as StoreWithSpy<any, any>)
      .toHaveState()
      .matching({
        subreddits: {
          subreddits: [
            'ireland',
            'IrelandGaming',
            'IrelandBaldwin',
            'IrelandAssistance',
            'IrelandPics',
            'IrelandonReddit',
            'IrelandJournalism',
            'irelandjobs'
          ]
        },
        ui: { loading: false }
      });

    await expectRedux(store as StoreWithSpy<any, any>)
      .toDispatchAnAction()
      .matching({
        type: '[Subreddits] SET_LOADER',
        payload: { loading: false },
        meta: { feature: '[Subreddits]' }
      });

    expect(screen.queryByText('Loading…')).toBeNull();

    expect(await screen.findByText(/IrelandGaming/i)).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(8);
    // expect(screen.getByText('ireland')).toBeInTheDocument();
    expect(screen.getByText('IrelandGaming')).toBeInTheDocument();
    expect(screen.getByText('IrelandBaldwin')).toBeInTheDocument();
    // expect(screen.getByText('IrelandIncorrectlyUK')).toBeInTheDocument();
    // expect(screen.getByText('IrelandR4R')).toBeInTheDocument();
    expect(screen.getByText('IrelandPics')).toBeInTheDocument();
    expect(screen.getByText('IrelandonReddit')).toBeInTheDocument();
    // expect(screen.getByText('IrelandSimpsonsFans')).toBeInTheDocument();
  });
});
