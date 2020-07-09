import React, { FC } from 'react';
import { SubredditProvider } from './useSubreddit';
import EnthusasticGreeting from './EnthusasticGreeting';

const Root: FC = () => {
  return (
    <SubredditProvider>
      <EnthusasticGreeting />
    </SubredditProvider>
  );
};

export default Root;
