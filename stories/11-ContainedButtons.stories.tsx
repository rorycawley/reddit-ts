import React, { FC } from 'react';

import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material Button'
};

export const Default: FC = () => (
  <Button onClick={action('Default button clicked')} variant='contained'>
    Default
  </Button>
);

export const Primary: FC = () => (
  <Button
    color='primary'
    onClick={action('Primary button clicked')}
    variant='contained'>
    Primary
  </Button>
);

export const Secondary: FC = () => (
  <Button
    color='secondary'
    onClick={action('Secondary button clicked')}
    variant='contained'>
    Secondary
  </Button>
);
