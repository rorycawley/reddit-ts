import React, { FC } from 'react';

import Post from '../src/components/Root/Post';

export default { title: 'Post', component: Post };

export const Default: FC = () => (
  <Post id='1234' title='hello post' author='rory' over18={false} />
);

export const Over18: FC = () => (
  <Post id='1234' title='hello post Over18' author='rory' over18={true} />
);

export const Selftext: FC = () => (
  <Post
    id='1234'
    title='hello post Selftext'
    author='rory'
    over18={false}
    selftext="Hi everyone,\n\nMyself and my housemate are looking to play tennis at Prospect Park, but I can't it on any booking system or find any number that is picking up. Does anyone know if the courts there are currently open?"
  />
);

// Default.story = {
//   name: 'default'
// };
