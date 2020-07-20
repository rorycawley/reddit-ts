import { storeSpy, expectRedux } from 'expect-redux';
import { StoreEnhancer, Store } from 'redux';
import { configureStore } from 'src/store';
import { Provider } from 'react-redux';
import React from 'react';
// import renderer from 'react-test-renderer'; // ES6
import {
  render,
  screen,
  RenderResult,
  fireEvent
} from '@testing-library/react';
import SearchBar from 'src/components/Root/SearchBar';
import { StoreWithSpy } from 'expect-redux/dist/storeSpy';

describe('SearchBar', () => {
  let store: Store;
  // let component;
  // let documentBody: RenderResult;

  beforeEach(() => {
    store = configureStore([storeSpy as StoreEnhancer]);

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

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
      .toHaveState()
      .matching({
        subreddits: {
          subreddits: []
        },
        ui: { loading: true }
      });

    // screen.debug();
    expect(screen.getByText('Loading…')).toBeInTheDocument();

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

    expect(screen.queryByText('Loading…')).toBeNull();

    expect(screen.getByRole('listbox').children).toHaveLength(4);
    expect(screen.getByText('ReactJSLearn')).toBeInTheDocument();
    expect(screen.getByText('reactjsdevelopers')).toBeInTheDocument();
    expect(screen.getByText('reactjs_beginners')).toBeInTheDocument();
    // console.log(items);
    screen.debug();
  });
});
