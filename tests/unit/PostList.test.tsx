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

// import ReactDOM from 'react-dom';
import PostList from 'src/components/Root/PostList';
import {
  postListLoading,
  postListEmptyList,
  postListWithFourPosts
} from 'tests/data/postLists';

// import { postTitleImage, postTitleOnly } from 'tests/data';

// let documentBody: RenderResult;

describe('PostList', () => {
  // let container: Element;

  // const render = (component: JSX.Element) =>
  //   // eslint-disable-next-line react/no-render-return-value
  //   ReactDOM.render(component, container);

  const isElementInDocument = (testId: string): boolean =>
    screen.queryByTestId(testId) !== null;

  const getElementByTestId = (testId: string): HTMLElement =>
    screen.getByTestId(testId);

  beforeEach(() => {
    // container = document.createElement('div');
  });

  it('renders the postlist without props', () => {
    // Arrange
    const component = <PostList />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(isElementInDocument('postlist')).toBeTruthy();
  });

  it("renders the postlist when it's loading", () => {
    // Arrange
    const component = <PostList {...postListLoading} />;

    // Act
    render(component);
    // screen.debug();

    expect(
      document.getElementsByClassName(
        'MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse'
      )
    ).not.toBeNull();
  });

  it("renders the postlist when it's got no posts", () => {
    // Arrange
    const component = <PostList {...postListEmptyList} />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(getElementByTestId(`postlist`).textContent).toMatch(
      "There's nothing to show right now."
    );
    expect(getElementByTestId(`postlist`).textContent).toMatch(
      'Please select a subreddit.'
    );
  });

  it("renders the postlist when it's got several posts", () => {
    // Arrange
    const component = <PostList {...postListWithFourPosts} />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(getElementByTestId(`postlist`).childElementCount).toEqual(4);
  });

  // it('renders the post img', () => {
  //   // Arrange
  //   const component = <Post {...postTitleImage} />;

  //   // Act
  //   render(component);
  //   // screen.debug();

  //   // Assert
  //   expect(
  //     getElementByTestId(`card-post-image-${postTitleImage.id}`).getAttribute(
  //       'style'
  //     )
  //   ).toMatch(postTitleImage.image);
  // });

  // it("does not render an image when the post doesn't have an image", () => {
  //   // Arrange
  //   const component = <Post {...postTitleOnly} />;

  //   // Act
  //   render(component);
  //   // screen.debug();

  //   // Assert
  //   expect(
  //     isElementInDocument(`card-post-image-${postTitleOnly.id}`)
  //   ).toBeFalsy();
  // });

  // it('renders a selftext when the post does have a selftext', () => {
  //   // Arrange
  //   // TODO ensure the data processing is doing this
  //   postTitleOnly.selftext = postTitleOnly.selftext.replace(
  //     /(\r\n|\n|\r)/gm,
  //     ' '
  //   );
  //   const component = <Post {...postTitleOnly} />;

  //   // Act
  //   render(component);
  //   // screen.debug();

  //   // Assert
  //   expect(
  //     getElementByTestId(`card-post-selftext-${postTitleOnly.id}`).textContent
  //   ).toBe(postTitleOnly.selftext);
  // });

  // it("does not render a selftext when the post doesn't have a selftext", () => {
  //   // Arrange
  //   const component = <Post {...postTitleImage} />;

  //   // Act
  //   render(component);
  //   // screen.debug();
  //   // card-post-selftext-postTitleOnly

  //   // Assert
  //   expect(
  //     isElementInDocument(`card-post-selftext-${postTitleImage.id}`)
  //   ).toBeFalsy();
  // });

  // it('renders a url link when the post does have a urltext', () => {
  //   // Arrange
  //   const component = <Post {...postTitleOnly} />;

  //   // Act
  //   render(component);
  //   // screen.debug();

  //   // Assert
  //   expect(
  //     screen.getByText(postTitleOnly.urltext).getAttribute('href')
  //   ).toMatch(postTitleOnly.urltext);
  // });

  // it('does not render a url link when the post does not have a urltext', () => {
  //   // Arrange
  //   const component = <Post {...postTitleImage} />;

  //   // Act
  //   render(component);
  //   // screen.debug();

  //   // Assert
  //   expect(
  //     isElementInDocument(`card-post-urltext-${postTitleImage.id}`)
  //   ).toBeFalsy();
  // });
});
