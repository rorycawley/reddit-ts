/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { SubredditProvider } from './useSubreddit';
import SearchBar from './SearchBar';
import { querySubreddits } from '~/store/subreddits';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';

const App: FC = () => {
  const dispatch = useDispatch();
  const subredditsSelector = (state: RootState) => state.subreddits.subreddits;
  const subreddits = useSelector(subredditsSelector);

  return (
    <SubredditProvider>
      <h1>hello</h1>
      <SearchBar />
      <button onClick={() => dispatch(querySubreddits('reactjs'))}>
        reactjs
      </button>
      <button onClick={() => dispatch(querySubreddits('keto'))}>keto</button>
    </SubredditProvider>
  );
};

export default App;
