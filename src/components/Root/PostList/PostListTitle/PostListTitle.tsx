import { Subreddit } from 'src/entities';

import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelectedSubreddit } from '../../useSelectedSubreddit';
const useStyles = makeStyles(() => ({
  heading: {
    paddingLeft: '0px',
    paddingTop: '20px'
  }
}));

export interface PostListTitleProps {
  subreddit: Subreddit;
}

const PostListTitle: FC = () => {
  const classes = useStyles();
  const { state } = useSelectedSubreddit();

  return (
    <Typography className={classes.heading}>
      Newest posts from
      <strong> /r/{state.selectedSubreddit}</strong>
    </Typography>
  );
};
export default PostListTitle;
