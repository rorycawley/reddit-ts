import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  heading: {
    paddingLeft: '0px',
    paddingTop: '20px'
  }
}));

const defaultErrorMessage = 'An error has occurred.';

interface ErrorMessageProps {
  error?: string;
}

const ErrorFound: FC<ErrorMessageProps> = ({
  error = defaultErrorMessage
}: ErrorMessageProps) => {
  const classes = useStyles();

  return <Typography className={classes.heading}>{error}</Typography>;
};

export default ErrorFound;
