// import { PostProps } from './../../src/components/Root/Post/Post';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  postBeforeAfter1,
  postBeforeAfter2,
  postBeforeAfter3,
  postBeforeAfter4
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

  if (post.selftext) {
    processedPost = { ...processedPost, selftext: removeCRLF(post.selftext) };
  }

  if (
    post.thumbnail &&
    post.url_overridden_by_dest &&
    post.thumbnail !== 'self' &&
    !post.no_follow
  ) {
    // if (post.url_overridden_by_dest) {
    processedPost = {
      ...processedPost,
      image: post.url_overridden_by_dest
    };
    // } else {
    // processedPost = { ...processedPost, image: post.thumbnail };
    // }
  }

  if (
    post.thumbnail &&
    post.url_overridden_by_dest &&
    post.thumbnail !== 'self' &&
    post.no_follow
  ) {
    processedPost = {
      ...processedPost,
      image: post.url_overridden_by_dest
    };

    processedPost = {
      ...processedPost,
      urltext: post.url_overridden_by_dest
    };
  }

  return processedPost;
};

const checkPost = (processedPostData: PostProps, comparator: PostProps) => {
  expect(processedPostData.id).toBe(comparator.id);
  expect(processedPostData.author).toBe(comparator.author);
  expect(processedPostData.title).toBe(comparator.title);
  expect(processedPostData.over18).toBe(comparator.over18);
  expect(processedPostData.selftext).toBe(removeCRLF(comparator.selftext));
  expect(processedPostData.urltext).toBe(comparator.urltext);
  expect(processedPostData.image).toBe(comparator.image);

  return true;
};

describe('postProcess', () => {
  it('processes a post that has a text on screen only', () => {
    const { before, after } = postBeforeAfter1;

    const testAfter = processPost(before);

    expect(checkPost(testAfter, after)).toBeTruthy();
  });

  it('processes a post that shows an image only, no selftext', () => {
    const { before, after } = postBeforeAfter2;

    const testAfter = processPost(before);

    expect(checkPost(testAfter, after)).toBeTruthy();
  });

  it('processes a post that shows a thumbnail image and a url', () => {
    const { before, after } = postBeforeAfter3;

    const testAfter = processPost(before);

    expect(checkPost(testAfter, after)).toBeTruthy();
  });

  it('processes a post that shows a full image and a url', () => {
    const { before, after } = postBeforeAfter4;

    const testAfter = processPost(before);

    expect(checkPost(testAfter, after)).toBeTruthy();
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
