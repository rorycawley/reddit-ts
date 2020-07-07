// import { PostProps } from './../../src/components/Root/Post/Post';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  postBeforeAfter1,
  postBeforeAfter2,
  postBeforeAfter3
} from 'tests/data';

import { PostProps } from 'components/Root/Post';

import { PostData } from 'tests/data/postInterfaces';

const defaultPostProps: PostProps = {
  author: '',
  id: '',
  over18: false,
  title: ''
};

const removeCRLF = (s?: string) => (s ? s.replace(/(\r\n|\n|\r)/gm, ' ') : s);

const processPost = (post: PostData): PostProps => {
  let processedPost: PostProps = defaultPostProps;

  processedPost = { ...processedPost, id: post.id };
  processedPost = { ...processedPost, author: post.author };
  processedPost = { ...processedPost, title: post.title };
  processedPost = { ...processedPost, over18: post.over_18 };
  processedPost = { ...processedPost, selftext: removeCRLF(post.selftext) };

  if (post.thumbnail) {
    processedPost = { ...processedPost, image: post.thumbnail };
  }

  if (post.url_overridden_by_dest) {
    processedPost = {
      ...processedPost,
      urltext: post.url_overridden_by_dest
    };
  }
  return processedPost;
};

describe('postProcess', () => {
  it('processes a post that has a text on screen only', () => {
    const { before, after } = postBeforeAfter1;

    const testAfter = processPost(before);

    expect(testAfter.id).toBe(after.id);
    expect(testAfter.author).toBe(after.author);
    expect(testAfter.title).toBe(after.title);
    expect(testAfter.over18).toBe(after.over18);
    expect(testAfter.selftext).toBe(removeCRLF(after.selftext));
    expect(testAfter.urltext).toBe(after.urltext);
    expect(testAfter.image).toBe(after.image);
  });

  // it('processes a post that has a x screen only', () => {
  //   const [before, after] = postBeforeAfter2;

  //   expect(before.id).toBe(after.id);
  //   expect(before.author).toBe(after.author);
  //   expect(before.title).toBe(after.title);
  // });

  // it('processes a post that has a y screen only', () => {
  //   const [before, after] = postBeforeAfter3;

  //   expect(before.id).toBe(after.id);
  //   expect(before.author).toBe(after.author);
  //   expect(before.title).toBe(after.title);
  // });
});
