/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderHook, act } from '@testing-library/react-hooks';

import {
  // SubredditProvider,
  useSelectedSubreddit,
  SubredditProvider,
  changeSelectedSubreddit
} from '~components/Root/useSelectedSubreddit';
import {
  getByTestId,
  render,
  RenderResult,
  fireEvent
} from '@testing-library/react';
import React, { FC } from 'react';

const SelectedSubRedditHookTester: FC = () => {
  const { state, dispatch } = useSelectedSubreddit();
  return (
    <>
      <div data-testid='statevalue'>{state.selectedSubreddit}</div>{' '}
      <button
        data-testid='reactjs'
        onClick={() => dispatch(changeSelectedSubreddit('reactjs'))}>
        reactjs
      </button>
    </>
  );
};

//  import from './useSubreddit';
describe('useSubreddit', () => {
  it('check default value of subreddit', () => {
    // react hook testing
    const { result } = renderHook(() => useSelectedSubreddit());

    // check what's returned from the hook
    expect(typeof result.current.state.selectedSubreddit).toBe('string');
    expect(typeof result.current.dispatch).toBe('function');

    // check the default value
    const selectedSubreddit: string = result.current.state.selectedSubreddit;
    expect(selectedSubreddit).toEqual('all');
  });
});
