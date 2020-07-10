import React, { FC } from 'react';

import PostList from '../src/components/Root/PostList';
import { postListWithFourPosts } from '../tests/data/postLists';

export default {
  title: 'PostList',
  component: PostList
};

export const Default: FC = () => <PostList />;
export const Loading: FC = () => <PostList loading={true} />;
export const Empty: FC = () => <PostList posts={{ posts: [] }} />;
export const FourPosts: FC = () => (
  <PostList posts={postListWithFourPosts.posts} />
);
