import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../../src/components/Root/Header';

describe('Header', () => {
  it('renders the component', () => {
    // Arrange
    const component = <Header />;

    // Act
    render(component);

    // Assert
    expect(screen.getByText('WP Reddit Demo')).toBeInTheDocument();
  });
});
