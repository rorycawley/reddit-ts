/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { useSubreddit } from './useSubreddit';

const SearchBar: FC = () => {
  // const { state, dispatch } = useSubreddit();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { state, dispatch } = useSubreddit();

  return (
    <>
      <div data-testid='statevalue'>{state.payload}</div>{' '}
      <button
        data-testid='reactjs'
        onClick={() => dispatch({ type: 'SET_SUBREDDIT', payload: 'reactjs' })}>
        reactjs
      </button>
      <button
        data-testid='ireland'
        onClick={() => dispatch({ type: 'SET_SUBREDDIT', payload: 'ireland' })}>
        ireland
      </button>
    </>
  );
};
export default SearchBar;
