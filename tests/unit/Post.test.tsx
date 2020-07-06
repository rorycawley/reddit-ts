import React from 'react';
import ReactDOM from 'react-dom';
import Post from 'components/Root/Post';

import { postTitleImage, postTitleOnly } from 'tests/data';

describe('Post', () => {
  let container: Element;

  const render = (component: JSX.Element) =>
    // eslint-disable-next-line react/no-render-return-value
    ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders the post title', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);

    // Assert
    expect(container.textContent).toMatch(postTitleOnly.title);
  });

  it('renders the post img', () => {
    // Arrange
    const component = <Post {...postTitleImage} />;

    // Act
    render(component);

    // Assert
    const imgSelector = `${postTitleImage.id}-image`;
    const imgElement = container.querySelector(`img[id=${imgSelector}]`);
    expect(imgElement).not.toBeNull();
    expect(imgElement?.getAttribute('src')).toMatch(postTitleImage.image);
  });

  it("does not render an image when the post doesn't have an image", () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    console.log(container.innerHTML);
    // Assert
    const imgSelector = `${postTitleOnly.id}-image`;
    const imgElement = container.querySelector(`img[id=${imgSelector}]`);
    expect(imgElement).toBeNull();
  });

  it('renders a selftext when the post does have a selftext', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    console.log(container.innerHTML);
    // Assert
    const stSelector = `${postTitleOnly.id}-selftext`;
    const stElement = container.querySelector(`div[id=${stSelector}]`);
    expect(stElement).not.toBeNull();
    expect(stElement?.textContent).toMatch(postTitleImage.selftext);
  });

  it("does not render a selftext when the post doesn't have a selftext", () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    console.log(container.innerHTML);

    // Assert
    const stSelector = `${postTitleImage.id}-selftext`;
    const stElement = container.querySelector(`img[id=${stSelector}]`);
    expect(stElement).toBeNull();
  });

  it('renders a url when the post does have a urltext', () => {
    // Arrange
    const component = <Post {...postTitleOnly} />;

    // Act
    render(component);
    console.log(container.innerHTML);

    // Assert
    const urltSelector = `${postTitleOnly.id}-urltext`;
    const urltElement = container.querySelector(`a[id=${urltSelector}]`);
    expect(urltElement).not.toBeNull();
    expect(urltElement?.getAttribute('href')).toMatch(postTitleOnly.urltext);
  });
});
