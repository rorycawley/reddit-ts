/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { SubredditProvider } from './useSubreddit';
import SearchBar from './SearchBar';
import { increment, decrement } from '~/store/counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
// import counterReducer from 'src/counter';

const App: FC = () => {
  const dispatch = useDispatch();
  const selectCounter = (state: RootState) => state.counterReducer.counter;
  const counter = useSelector(selectCounter);

  return (
    <SubredditProvider>
      <h1>hello</h1>
      <SearchBar />
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Age UP</button>
      <button onClick={() => dispatch(decrement())}>Age Down</button>
    </SubredditProvider>
  );
};

export default App;
