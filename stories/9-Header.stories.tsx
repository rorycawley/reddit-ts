import React, { FC } from 'react';

import Header from '../src/components/Root/Header';

export default {
  title: 'Header',
  component: Header
};

export const Default: FC = () => <Header />;

export const ErrorMessage: FC = () => <Header />;
