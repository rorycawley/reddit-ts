import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListTwoToneIcon from '@material-ui/icons/ListTwoTone';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export interface EmptyListProps {
  header: string;
  subheader: string;
}

const EmptyList: FC<EmptyListProps> = ({
  header,
  subheader
}: EmptyListProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <ListTwoToneIcon fontSize='large' />{' '}
        <Typography variant='h5' component='h2'>
          {header}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {subheader}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default EmptyList;
