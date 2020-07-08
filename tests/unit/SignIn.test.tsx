import React from 'react';
import { render, screen } from '@testing-library/react';

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
});
