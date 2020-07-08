import React, { FC } from 'react';
import Post, { PostProps } from './Post/Post';
import Loading from './Loading';
import EmptyList from './EmptyList';
import { Grid, makeStyles } from '@material-ui/core';

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
  posts?: PostProps[];
}

const PostList: FC<PostListProps> = ({
  loading = false,
  posts = []
}: PostListProps) => {
  const classes = useStyles();

  if (loading) {
    return (
      <div data-testid='postlist'>
        <Loading />
      </div>
    );
  }

  if (posts?.length === 0) {
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
      {posts.map(post => (
        <Grid key={post.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default PostList;
