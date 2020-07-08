import React, { FC } from 'react';

import PostListTitle from '../src/components/Root/PostList/PostListTitle';

export default {
  title: 'PostListTitle',
  component: PostListTitle
};

export const Default: FC = () => <PostListTitle />;
export const ReactJS: FC = () => <PostListTitle subreddit='reactjs' />;
