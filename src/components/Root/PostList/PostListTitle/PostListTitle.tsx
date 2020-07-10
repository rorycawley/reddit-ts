import { Subreddit } from 'src/entities';

import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  heading: {
    paddingLeft: '0px',
    paddingTop: '20px'
  }
}));

export interface PostListTitleProps {
  subreddit?: Subreddit;
}

const PostListTitle: FC<PostListTitleProps> = ({
  subreddit = 'all'
}: PostListTitleProps) => {
  const classes = useStyles();

  return (
    <Typography className={classes.heading}>
      Newest posts from
      <strong> /r/{subreddit}</strong>
    </Typography>
  );
};
export default PostListTitle;
