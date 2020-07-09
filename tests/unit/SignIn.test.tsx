/* eslint-disable @typescript-eslint/require-await */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import SignIn from '../../src/components/SignIn';

describe('SignIn', () => {
  it('renders the component', () => {
    // Arrange
    const component = <SignIn />;

    // Act
    const { getByRole } = render(component);
    const email = getByRole('textbox', {
      name: 'Email Address'
    }) as HTMLInputElement;
    const rememberme = getByRole('checkbox', {
      name: 'Remember me'
    }) as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    // screen.debug();

    // Assert
    expect(email.value).toBe('');
    expect(password.value).toBe('');
    expect(rememberme.value).toBeFalsy();
  });

  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <SignIn onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText('Email Address *'), {
          target: { value: 'email@test.com' }
        });
        fireEvent.change(getByLabelText('Password *'), {
          target: { value: '1234567' }
        });
      });

      await act(async () => {
        userEvent.click(getByRole('button'));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  describe('with invalid email', () => {
    it('renders the email validation error', async () => {
      // arrange
      const { getByLabelText, container } = render(<SignIn />);

      // act
      await act(async () => {
        const emailInput = getByLabelText('Email Address *');
        fireEvent.change(emailInput, {
          target: { value: 'Invalid email' }
        });
        fireEvent.blur(emailInput);
      });

      // assert
      expect(container.innerHTML).toMatch('Enter a valid email');
    });
  });

  describe('with invalid password', () => {
    it('renders the password validation error', async () => {
      // arrange
      const { getByLabelText, container } = render(<SignIn />);

      // act
      await act(async () => {
        const passwordInput = getByLabelText('Password *');
        fireEvent.change(passwordInput, {
          target: {
            value: '123'
          }
        });
        fireEvent.blur(passwordInput);
      });

      // assert
      expect(container.innerHTML).toMatch(
        'Password should be longer than 6 characters'
      );
    });
  });
});
