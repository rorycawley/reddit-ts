import React, { FC } from 'react';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import EmptyList from '../src/components/Root/PostList/EmptyList';

export default {
  title: 'EmptyList',
  component: EmptyList
};

export const Default: FC = () => (
  <EmptyList
    header="There's nothing to show right now."
    subheader='Please select a subreddit.'
  />
);
