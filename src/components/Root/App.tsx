/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { SubredditProvider } from './useSubreddit';
import SearchBar from './SearchBar';
import { fetchSubreddits } from '~/store/subreddits';
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
      <button onClick={() => dispatch(fetchSubreddits('reactjs'))}>
        reactjs
      </button>
      <button onClick={() => dispatch(fetchSubreddits('keto'))}>keto</button>
      <div>
        {subreddits.map(subreddit => (
          <div key={subreddit}>{subreddit}</div>
        ))}
      </div>
    </SubredditProvider>
  );
};

export default App;
