import React from 'react';
import {
  render,
  // RenderResult,
  screen
  // fireEvent,
  // waitFor,
  // getByRole,
  // getByTestId
} from '@testing-library/react';
import EmptyList from 'src/components/Root/PostList/EmptyList';

// import ReactDOM from 'react-dom';
// import Post from 'src/components/Root/PostList/Post';

// import { postTitleImage, postTitleOnly } from 'tests/data';

// let documentBody: RenderResult;

describe('Post', () => {
  // let container: Element;

  // const render = (component: JSX.Element) =>
  //   // eslint-disable-next-line react/no-render-return-value
  //   ReactDOM.render(component, container);

  // const isElementInDocument = (testId: string): boolean =>
  //   screen.queryByTestId(testId) !== null;

  // const getElementByTestId = (testId: string): HTMLElement =>
  //   screen.getByTestId(testId);



  it('renders the empty list', () => {
    // Arrange
    const component = (
      <EmptyList
        header="There's nothing to show right now."
        subheader='Please select a subreddit.'
      />
    );

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(
      screen.getByText("There's nothing to show right now.")
    ).toBeInTheDocument();
    expect(screen.getByText('Please select a subreddit.')).toBeInTheDocument();
  });
});
