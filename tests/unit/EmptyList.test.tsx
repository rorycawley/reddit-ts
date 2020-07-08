import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyList from 'src/components/Root/PostList/EmptyList';

describe('EmptyList', () => {
  it('renders the empty list', () => {
    // Arrange
    const component = (
      <EmptyList
        header="There's nothing to show right now."
        subheader='Please select a subreddit.'
      />
    );

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(
      screen.getByText("There's nothing to show right now.")
    ).toBeInTheDocument();
    expect(screen.getByText('Please select a subreddit.')).toBeInTheDocument();
  });
});
