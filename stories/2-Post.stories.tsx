import React, { FC } from 'react';

import Post, { PostProps } from '../src/components/Root/PostList/Post';

export default { title: 'Post', component: Post };

// export const Default: FC = () => (
//   <Post id='1234' title='hello post' author='rory' over18={false} />
// );

// export const Over18: FC = () => (
//   <Post id='1234' title='hello post Over18' author='rory' over18={true} />
// );

// export const Selftext: FC = () => (
//   <Post
//     id='1234'
//     title='hello post Selftext'
//     author='rory'
//     over18={false}
//     selftext={"Hi everyone,\n\nMyself and my housemate are looking to play tennis at Prospect Park, but I can't it on any booking system or find any number that is picking up. Does anyone know if the courts there are currently open?".replace(
//       /(\r\n|\n|\r)/gm,
//       ' '
//     )}
//   />
// );

const post: PostProps = {
  id: 'hmsrju',
  author: 'rik9698',
  title: 'Thinking of food makes me sick.',
  over18: false,
  selftext:
    "Hey guys!\n\n6th day on keto and 3rd on OMAD here.\n\nSo, yeah it's in the title. \n\nWhenever I think of food I feel sick, nauseated and about to vomit.This only happens when I think of food (especially healthy food full of green leaves.)\n\nMy suggested caloric intake is 1200 and I only eat up to 500-700. I'm not trying to starve myself but I just get full, and if I think about forcing myself to eat more I get nauseated. \n\nOtherwise I just feel okay, kind of weaker then what I am used to, but I am able to perform my daily tasks.\n\nIs this normal? And would it last forever?",
  created: 'about 4 hours ago'
};

export const Selftext: FC = () => (
  <Post
    id={post.id}
    title={post.title}
    author={post.author}
    over18={post.over18}
    selftext={post.selftext}
    created={post.created}
  />
);

const post2 = {
  id: 'hmuqai',
  author: 'Gnarly_Sarley',
  title: "I'm glad I had a sign to tell me how to stand.",
  over18: false,
  image: 'https://i.redd.it/g7y75277vf951.jpg',
  created: 'about 4 hours ago'
};

export const LinkImage: FC = () => (
  <Post
    id={post2.id}
    title={post2.title}
    author={post2.author}
    over18={post2.over18}
    image={post2.image}
    created={post2.created}
  />
);

const post3 = {
  id: 'hmur82',
  title: 'Low in iron',
  author: 'Necessarycontroversy',
  over18: false,
  image:
    'https://a.thumbs.redditmedia.com/P0NU6ZAgn9bU5eAlbRzN0UnPYDfSgiVVfKc3kNl0T50.jpg',
  urltext: 'https://imgur.com/6w6414C',
  created: 'about 4 hours ago'
};

export const LinkImage2: FC = () => (
  <Post
    id={post3.id}
    title={post3.title}
    author={post3.author}
    over18={post3.over18}
    urltext={post3.urltext}
    image={post3.image}
    created={post3.created}
  />
);

const post4 = {
  id: 'hmuo40',
  title: "Mosting likely to a club in my 30's.",
  author: 'River_Equation',
  over18: false,
  image:
    'https://a.thumbs.redditmedia.com/6YKmvKP2gNBkDqFUbpVNFrYxkq2UbF5BmOShjYxsOs0.jpg',
  urltext: 'https://i.imgur.com/k3jzzWy.gifv?TwYqa=PseQo',
  created: 'about 4 hours ago'
};

export const LinkImage3: FC = () => (
  <Post
    id={post4.id}
    title={post4.title}
    author={post4.author}
    over18={post4.over18}
    urltext={post4.urltext}
    image={post4.image}
    created={post4.created}
  />
);
// export const Url: FC = () => (
//   <Post
//     id='1234'
//     title='hello post Image'
//     author='rory'
//     over18={false}
//     urltext='https://www.bbc.co.uk/news/uk-england-berkshire-53254282'
//   />
// );
