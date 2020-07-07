import React, { FC } from 'react';

import Post from '../src/components/Root/Post';

export default { title: 'Post', component: Post };

export const Default: FC = () => (
  <Post id='1234' title='hello post' author='rory' over18={false} />
);

// Default.story = {
//   name: 'default'
// };
