import React, { FC } from 'react';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import PageNav from '../src/components/Root/PostList/PageNav';

export default {
  title: 'PageNav',
  component: PageNav
};

export const Default: FC = () => (
         <PageNav
           header="There's nothing to show right now."
           subheader='Please select a subreddit.'
         />
       );
