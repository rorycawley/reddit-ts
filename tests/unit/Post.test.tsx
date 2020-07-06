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
    expect(imgElement?.getAttribute('src')).toMatch(postTitleImage.thumbnail);
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
});
