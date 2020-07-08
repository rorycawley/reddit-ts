import React, { FC } from 'react';
import { IconButton, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface PageNavProps {
  backDisabled: boolean;
  nextDisabled: boolean;
  clickBack: () => void;
  clickNext: () => void;
}

const PageNav: FC<PageNavProps> = ({
  backDisabled,
  nextDisabled,
  clickBack,
  clickNext
}: PageNavProps) => {
  return (
    <Grid
      data-testid='pagenav'
      container
      spacing={2}
      alignContent='space-around'
      justify='center'>
      <IconButton
        aria-label='back'
        disabled={backDisabled}
        color='default'
        onClick={clickBack}>
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        color='default'
        disabled={nextDisabled}
        aria-label='next'
        onClick={clickNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Grid>
  );
};

export default PageNav;
