/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { storeSpy } from 'expect-redux';
import { StoreEnhancer, Store } from 'redux';
import { configureStore } from 'src/store';
import { Provider } from 'react-redux';
import React from 'react';
// import { server, rest } from 'tests/utils/setupMSW';

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from 'src/components/Root/SearchBar';

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

    // expect(screen.getByText('Loading…')).toBeInTheDocument();

    expect(await screen.findByText('reactjsdevelopers')).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(4);

    expect(screen.getByText('reactjs')).toBeInTheDocument();
    expect(screen.getByText('ReactJSLearn')).toBeInTheDocument();
    expect(screen.getByText('reactjsdevelopers')).toBeInTheDocument();
    expect(screen.getByText('reactjs_beginners')).toBeInTheDocument();
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

    // expect(await screen.findByText('Loading…')).toBeTruthy();

    expect(await screen.findByText('reactjsdevelopers')).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(4);

    // change to search for ireland
    fireEvent.change(input, {
      target: {
        value: 'ireland'
      }
    });

    // // check the input box is set to 'reactjs'
    expect(screen.getByRole('textbox')).toHaveValue('ireland');

    // expect(await screen.findByText('Loading…')).toBeTruthy();

    // screen.debug();
    expect(await screen.findByText('IrelandBaldwin')).toBeTruthy();

    expect(screen.queryByText('Loading…')).toBeNull();

    expect(await screen.findByText(/IrelandGaming/i)).toBeTruthy();

    expect(screen.getByRole('listbox').children).toHaveLength(8);
    expect(screen.getByText('ireland')).toBeInTheDocument();
    expect(screen.getByText('IrelandGaming')).toBeInTheDocument();
    expect(screen.getByText('IrelandBaldwin')).toBeInTheDocument();
    expect(screen.getByText('IrelandIncorrectlyUK')).toBeInTheDocument();
    expect(screen.getByText('IrelandR4R')).toBeInTheDocument();
    expect(screen.getByText('IrelandPics')).toBeInTheDocument();
    expect(screen.getByText('IrelandonReddit')).toBeInTheDocument();
    expect(screen.getByText('IrelandSimpsonsFans')).toBeInTheDocument();
  });
});
