import React from 'react';
import { render, screen } from '@testing-library/react';
import PostListTitle from 'src/components/Root/PostList/PostListTitle';

describe('PostListTitle', () => {
  it('renders a title with  subreddit reactjs', () => {
    // Arrange
    const component = <PostListTitle />;

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(screen.getByText('Newest posts from')).toBeInTheDocument();
    expect(screen.getByText('/r/all')).toBeInTheDocument();
  });
});
