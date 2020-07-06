import React from 'react';
import ReactDOM from 'react-dom';
import Post from 'components/Root/Post';

import { post } from 'tests/data';

describe('Post', () => {
  it('renders the post title', () => {
    // const post = { title: 'This is a test title' };

    const component = <Post {...post} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    expect(document.body.textContent).toMatch(post.title);
  });
});
