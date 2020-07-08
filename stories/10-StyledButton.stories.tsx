import React, { FC } from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from '../src/components/Root/StyledButton';

export default {
  title: 'Styled Button'
};

export const Default: FC = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);
