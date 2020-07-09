import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult
} from '@testing-library/react';
import StyledButton from '../../../src/components/Root/StyledButton/index';

describe('StyledButton', () => {
  let documentBody: RenderResult;

  it('renders the button', () => {
    // Arrange
    const component = <StyledButton>Styled Button</StyledButton>;

    // Act
    render(component);
    // screen.debug();

    // Assert
    expect(screen.getByText('Styled Button')).toBeInTheDocument();
  });

  it('clicks on the button', () => {
    const onClick = jest.fn();

    documentBody = render(<StyledButton onClick={onClick}>Hello</StyledButton>);

    fireEvent(
      documentBody.getByText('Hello'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalled();
  });
});
