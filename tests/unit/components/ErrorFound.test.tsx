import React from 'react';

import ErrorFound from '../../../src/components/Root/ErrorFound';
import { render, screen } from '@testing-library/react';

describe('ErrorFound', () => {
  it('renders without a provided error parameter', () => {
    // Arrange
    const component = <ErrorFound data-testid='errorfound' />;

    // Act
    render(component);

    // Assert
    expect(screen.getByText('An error has occurred.')).toBeInTheDocument();
  });

  it('renders the component with an error message', () => {
    // Arrange
    const component = (
      <ErrorFound
        data-testid='errorfound'
        error="We apologize for the inconvenience but there's been a temporary problem that will be fixed shortly."
      />
    );

    // Act
    render(component);

    // Assert
    expect(
      screen.getByText(
        "We apologize for the inconvenience but there's been a temporary problem that will be fixed shortly."
      )
    ).toBeInTheDocument();
  });
});
