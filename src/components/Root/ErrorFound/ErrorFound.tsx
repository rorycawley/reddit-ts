import React, { FC } from 'react';

const defaultErrorMessage = 'An error has occurred.';

interface ErrorMessageProps {
  error?: string;
}

const ErrorFound: FC<ErrorMessageProps> = ({
  error = defaultErrorMessage
}: ErrorMessageProps) => {
  return <div>{error}</div>;
};

export default ErrorFound;
