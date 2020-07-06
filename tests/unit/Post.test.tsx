import Post from '~/components/Root/Post';

import { post } from '../data';

describe('Post', () => {
  it('renders the post title', () => {
    expect(document.body.textContent).toMatch(post.title);
  });
});
