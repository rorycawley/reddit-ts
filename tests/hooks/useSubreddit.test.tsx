/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderHook, act } from '@testing-library/react-hooks';

import {
  // SubredditProvider,
  useSubreddit,
  SubredditProvider
} from 'src/components/Root/useSubreddit';
import {
  getByTestId,
  render,
  RenderResult,
  fireEvent
} from '@testing-library/react';
import React, { FC } from 'react';
import Root from 'src/components/Root';

const SubRedditTester: FC = () => {
  const { state, dispatch } = useSubreddit();
  return (
    <>
      <div data-testid='statevalue'>{state.payload}</div>{' '}
      <button
        data-testid='reactjs'
        onClick={() => dispatch({ type: 'SET_SUBREDDIT', payload: 'reactjs' })}>
        reactjs
      </button>
    </>
  );
};

//  import from './useSubreddit';
describe('useSubreddit', () => {
  it('check default value of subreddit', () => {
    // react hook testing
    const { result } = renderHook(() => useSubreddit());

    // check what's returned from the hook
    expect(typeof result.current.state.payload).toBe('string');
    expect(typeof result.current.dispatch).toBe('function');

    // check the default value
    const payload: string = result.current.state.payload;
    expect(payload).toEqual('all');
  });

  // let documentBody: RenderResult;

  it('renders the component', () => {
    // arrange
    const Root = (
      <SubredditProvider>
        <SubRedditTester />
      </SubredditProvider>
    );
    const { container, rerender } = render(Root);
    expect(getByTestId(container, 'statevalue').textContent).toBe('all');

    // act
    const submitButton = getByTestId(container, 'reactjs');
    fireEvent.click(submitButton);
    rerender(Root);

    // assert
    expect(getByTestId(container, 'statevalue').textContent).toBe('reactjs');
  });
});
