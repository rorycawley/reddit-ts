import React, { FC } from 'react';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import PageNav from '../src/components/Root/PostList/PageNav';

export default {
  title: 'PageNav',
  component: PageNav
};

export const Default: FC = () => <PageNav />;
export const BackEnabled: FC = () => <PageNav backDisabled={false} />;
export const NextEnabled: FC = () => <PageNav nextDisabled={false} />;
export const BackNextEnabled: FC = () => (
  <PageNav backDisabled={false} nextDisabled={false} />
);
