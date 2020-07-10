import { IPostList } from 'src/entities';

import React, { FC } from 'react';

import Loading from './Loading';
import EmptyList from './EmptyList';
import { Grid, makeStyles } from '@material-ui/core';
import Post from './Post';

const xs = 12;
const sm = 6;
const md = 6;
const lg = 4;
const xl = 3;

const useStyles = makeStyles(() => ({
  content: {
    padding: '24px'
  },
  typographyStyles: {
    flex: 1
  },
  heading: {
    paddingLeft: '0px',
    paddingTop: '20px'
  },
  post: {
    padding: '24px'
  }
}));

// grid definitions for screen sizes

export interface PostListProps {
  loading?: boolean;
  posts?: IPostList;
}

const PostList: FC<PostListProps> = ({
  loading = false,
  posts = { posts: [] }
}: PostListProps) => {
  const classes = useStyles();

  if (loading) {
    return (
      <div data-testid='postlist'>
        <Loading />
      </div>
    );
  }

  if (posts?.posts?.length === 0) {
    return (
      <div data-testid='postlist'>
        <EmptyList
          header="There's nothing to show right now."
          subheader='Please select a subreddit.'
        />
      </div>
    );
  }

  return (
    <Grid container spacing={2} className={classes.post} data-testid='postlist'>
      {posts.posts.map(post => (
        <Grid key={post.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default PostList;
