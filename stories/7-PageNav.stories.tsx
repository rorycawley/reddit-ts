import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import PageNav from '../src/components/Root/PostList/PageNav';

export default {
  title: 'PageNav',
  component: PageNav
};

const actionsData = {
  clickBack: action('clickBack'),
  clickNext: action('clickNext')
};

export const Default: FC = () => <PageNav {...actionsData} />;
export const BackEnabled: FC = () => (
  <PageNav backDisabled={false} {...actionsData} />
);
export const NextEnabled: FC = () => (
  <PageNav nextDisabled={false} {...actionsData} />
);
export const BackNextEnabled: FC = () => (
  <PageNav backDisabled={false} nextDisabled={false} {...actionsData} />
);
