import React, { ReactNode } from 'react';

interface TesterProps {
  /** Children to be displayed if the component is not busy */
  children: ReactNode;
  /** Determines if the component is considered busy */
  isBusy?: boolean;
}

const Tester: React.FC<TesterProps> = ({
  children,
  isBusy = false,
}: TesterProps) => {
  if (isBusy) {
    return <span data-id='spinner'>I am busy</span>;
  }

  return <>{children}</>;
};

export default Tester;
