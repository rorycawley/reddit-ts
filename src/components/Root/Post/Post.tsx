import React, { FC } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 200,
      maxHeight: 400
    },
    link: {
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    },
    hidden: {
      display: 'none'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export interface PostProps {
  author: string;
  id: string;
  image?: string;
  over18: boolean;
  selftext?: string;
  title: string;
  urltext?: string;
  created: string;
}

const Post: FC<PostProps> = ({
  author, // author
  id, // id
  image = '', // url_overridden_by_dest
  over18, // over_18
  selftext = '', // selftext
  title, // title
  urltext = '', // url_overridden_by_dest
  created
}: PostProps): JSX.Element => {
  const classes = useStyles();
  // const preventDefault = (event: React.SyntheticEvent) =>
  // event.preventDefault();

  return (
    <Card data-testid={`card-post-${id}`} className={classes.root}>
      <div
        data-testid={`card-post-over18-${id}`}
        className={classes.hidden}
        title={over18 ? 'over18' : 'notOver18'}
      />
      <CardHeader
        data-testid={`card-post-title-${id}`}
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        title={title}
        subheader={created + ' by /r/' + author}
      />
      {image && (
        <CardMedia
          data-testid={`card-post-image-${id}`}
          className={classes.media}
          image={image}
          title={title}
        />
      )}

      {selftext && (
        <CardContent>
          <Typography
            data-testid={`card-post-selftext-${id}`}
            variant='body2'
            color='textSecondary'
            component='p'>
            {selftext}
          </Typography>
        </CardContent>
      )}
      {urltext && (
        <Typography className={classes.link}>
          <Link
            target='_blank'
            rel='noreferrer'
            href={urltext}
            // onClick={preventDefault}
            data-testid={`card-post-urltext-${id}`}>
            {urltext}
          </Link>
        </Typography>
      )}
    </Card>
  );
};
export default Post;
