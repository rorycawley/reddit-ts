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
    selftext={"Hi everyone,\n\nMyself and my housemate are looking to play tennis at Prospect Park, but I can't it on any booking system or find any number that is picking up. Does anyone know if the courts there are currently open?".replace(
      /(\r\n|\n|\r)/gm,
      ' '
    )}
  />
);

export const Image: FC = () => (
  <Post
    id='1234'
    title='hello post Image'
    author='rory'
    over18={false}
    image='https://preview.redd.it/yyvst6zqc5951.jpg?width=640&height=853&crop=smart&auto=webp&s=6c761da7af6402d2be28dcfb5b73d1fcd397f17c'
  />
);

export const Url: FC = () => (
  <Post
    id='1234'
    title='hello post Image'
    author='rory'
    over18={false}
    urltext='https://www.bbc.co.uk/news/uk-england-berkshire-53254282'
  />
);
