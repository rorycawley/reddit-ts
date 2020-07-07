import React from 'react';
import {
  render,
  RenderResult,
  screen,
  fireEvent,
  waitFor,
  getByRole
} from '@testing-library/react';

// import ReactDOM from 'react-dom';
import Post from 'components/Root/Post';

import { postTitleImage, postTitleOnly } from 'tests/data';

// let documentBody: RenderResult;

describe('Post', () => {
  // let container: Element;

  // const render = (component: JSX.Element) =>
  //   // eslint-disable-next-line react/no-render-return-value
  //   ReactDOM.render(component, container);

  beforeEach(() => {
    // container = document.createElement('div');
  });

  it('renders the post title', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    //    documentBody = render(component);
    render(component);
    // screen.debug();

    // Assert
    // expect(screen.getByTestId('postlist')).toBeInTheDocument();
    // expect(screen.getByTestId('postlist')).toMatch(postTitleOnly.title);
    expect(screen.getByText(postTitleOnly.title)).toBeInTheDocument();
  });

  it('renders the post img', () => {
    // Arrange
    const component = <Post {...postTitleImage} />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    const imgSelector = `card-post-image-${postTitleImage.id}`;
    expect(screen.getByTestId(imgSelector)).toBeInTheDocument();
    expect(screen.getByTestId(imgSelector).getAttribute('style')).toMatch(
      postTitleImage.image
    );
  });

  it("does not render an image when the post doesn't have an image", () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    const imgSelector = `card-post-image-${postTitleOnly.id}`;
    expect(screen.queryByTestId(imgSelector)).toBeNull();
  });

  it('renders a selftext when the post does have a selftext', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    // screen.debug();
    // card-post-selftext-postTitleOnly

    // Assert
    const stElementId = `card-post-selftext-${postTitleOnly.id}`;
    const selfTextElement = screen.getByTestId(stElementId);
    expect(selfTextElement).toBeInTheDocument();
    expect(selfTextElement.textContent).toBe(postTitleOnly.selftext);
  });

  it("does not render a selftext when the post doesn't have a selftext", () => {
    // Arrange
    const component = <Post {...postTitleImage} />;

    // Act
    render(component);
    // screen.debug();
    // card-post-selftext-postTitleOnly

    // Assert
    const stElementId = `card-post-selftext-${postTitleImage.id}`;
    expect(screen.queryByTestId(stElementId)).toBeNull();
  });

  it('renders a url link when the post does have a urltext', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    // screen.debug();

    // console.log(container.innerHTML);
    const urlTextElement = screen.getByText(postTitleOnly.urltext);
    expect(urlTextElement).toBeInTheDocument();
    expect(urlTextElement.getAttribute('href')).toMatch(postTitleOnly.urltext);
  });

  it('does not render a url link when the post does not have a urltext', () => {
    // Arrange
    const component = <Post {...postTitleImage} />;

    // Act
    render(component);
    // screen.debug();

    // console.log(container.innerHTML);
    const utElementId = `card-post-urltext-${postTitleImage.id}`;
    expect(screen.queryByTestId(utElementId)).toBeNull();
  });
});
