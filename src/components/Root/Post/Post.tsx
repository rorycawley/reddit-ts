import React, { FC } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { SubredditPostNormalised } from '../../../../api/reddit';
import Link from '@material-ui/core/Link';

// interface PostProps {
//   author: string;
//   id: string;
//   image?: string;
//   over18: boolean;
//   selftext?: string;
//   title: string;
//   urltext?: string;
// }

// // url_overridden_by_dest
// const Post: FC<PostProps> = ({
//   author, // author
//   id, // id
//   image = '', // url_overridden_by_dest
//   over18, // over_18
//   selftext = '', // selftext
//   title, // title
//   urltext = '' // url_overridden_by_dest
// }: PostProps): JSX.Element => {
//   return (
//     <div id={id}>
//       {over18 && <strong>Over 18</strong>}
//       <div id={id + '-title'}>{title}</div>
//       <div id={id + '-author'}>{author}</div>
//       {selftext && <div id={id + '-selftext'}>{selftext}</div>}
//       {image && <img id={id + '-image'} src={image} />}
//       {urltext && (
//         <a id={id + '-urltext'} href={urltext}>
//           {urltext}
//         </a>
//       )}
//     </div>
//   );
// };
// export default Post;

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
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       maxWidth: 345,
//       minWidth: 200,
//       maxHeight: 400
//     },
//     link: {
//       '& > * + *': {
//         marginLeft: theme.spacing(2)
//     },
//     hidden: {
//       display: 'none'
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%' // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest
//       })
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)'
//     },
//     avatar: {
//       backgroundColor: red[500]
//     }
//   })
// );

export interface PostProps {
  author: string;
  id: string;
  image?: string;
  over18: boolean;
  selftext?: string;
  title: string;
  urltext?: string;
}

const Post: FC<PostProps> = ({
  author, // author
  id, // id
  image = '', // url_overridden_by_dest
  over18, // over_18
  selftext = '', // selftext
  title, // title
  urltext = '' // url_overridden_by_dest
}: PostProps): JSX.Element => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  // TODO: replace this
  const created = '2 days ago';

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
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
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
            href={urltext}
            onClick={preventDefault}
            data-testid={`card-post-urltext-${id}`}>
            {urltext}
          </Link>
        </Typography>
      )}

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Post;
