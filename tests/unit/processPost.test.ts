/* eslint-disable camelcase */
// import { PostProps } from './../../src/components/Root/Post/Post';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  postBeforeAfter1,
  postBeforeAfter2,
  postBeforeAfter3,
  postBeforeAfter4
} from 'tests/data';

import { PostProps } from 'components/Root/Post';
import { removeCRLF, processPost } from 'src/services/reddit/processPosts';

const checkPost = (processedPostData: PostProps, comparator: PostProps) => {
  expect(processedPostData.id).toBe(comparator.id);
  expect(processedPostData.author).toBe(comparator.author);
  expect(processedPostData.title).toBe(comparator.title);
  expect(processedPostData.over18).toBe(comparator.over18);
  expect(processedPostData.selftext).toBe(removeCRLF(comparator.selftext));
  expect(processedPostData.urltext).toBe(comparator.urltext);
  expect(processedPostData.image).toBe(comparator.image);
  expect(processedPostData.created).toMatch(/ago/);

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
});
