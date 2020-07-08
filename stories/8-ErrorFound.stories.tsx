import React, { FC } from 'react';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import ErrorFound from '../src/components/Root/ErrorFound';

export default {
  title: 'ErrorFound',
  component: ErrorFound
};

export const Default: FC = () => <ErrorFound />;

const errorMsg =
  "We apologize for the inconvenience but there's been a temporary problem that will be fixed shortly.";

export const ErrorMessage: FC = () => <ErrorFound error={errorMsg} />;
