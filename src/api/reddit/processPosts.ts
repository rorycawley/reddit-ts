/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import formatDistance from 'date-fns/formatDistance';
import { PostProps } from 'src/components/Root/PostList/Post';
import { PostData } from './reddit';

export const getCreated = (created_utc: number) =>
  formatDistance(created_utc * 1000, Date.now(), {
    addSuffix: true
  });

export const removeCRLF = (s?: string) =>
  s ? s.replace(/(\r\n|\n|\r)/gm, ' ') : s;

const defaultPostProps: PostProps = {
  author: '',
  id: '',
  over18: false,
  title: '',
  created: ''
};

export const processPost = (post: PostData): PostProps => {
  let processedPost: PostProps = defaultPostProps;

  processedPost = { ...processedPost, id: post.id };
  processedPost = { ...processedPost, author: post.author };
  processedPost = { ...processedPost, title: post.title };
  processedPost = { ...processedPost, over18: post.over_18 };
  processedPost = { ...processedPost, created: getCreated(post.created_utc) };

  if (post.selftext) {
    processedPost = { ...processedPost, selftext: removeCRLF(post.selftext) };
  }

  if (
    post.thumbnail &&
    post.url_overridden_by_dest &&
    post.thumbnail !== 'self' &&
    !post.no_follow
  ) {
    processedPost = {
      ...processedPost,
      image: post.url_overridden_by_dest
    };
  }

  if (
    post.thumbnail &&
    post.url_overridden_by_dest &&
    post.thumbnail !== 'self' &&
    post.no_follow
  ) {
    processedPost = {
      ...processedPost,
      image: post.thumbnail
    };

    processedPost = {
      ...processedPost,
      urltext: post.url_overridden_by_dest
    };
  }

  return processedPost;
};
