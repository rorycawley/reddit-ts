import React from 'react';
import {
  render,
  RenderResult,
  screen,
  fireEvent
} from '@testing-library/react';

import PageNav from 'src/components/Root/PostList/PageNav';

// const container = document.createElement('div');
let documentBody: RenderResult;

describe('PageNav', () => {
  it('renders the component', () => {
    documentBody = render(
      <PageNav
        backDisabled={false}
        nextDisabled={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickBack={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickNext={() => {}}
      />
    );

    expect(screen.getByTestId('pagenav')).toBeInTheDocument();
  });

  it('renders the component with back and next buttons', () => {
    documentBody = render(
      <PageNav
        backDisabled={false}
        nextDisabled={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickBack={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickNext={() => {}}
      />
    );

    expect(screen.getByLabelText('next')).toBeInTheDocument();
    expect(screen.getByLabelText('back')).toBeInTheDocument();
  });

  it('renders the component with back button  disabled', () => {
    documentBody = render(
      <PageNav
        backDisabled={true}
        nextDisabled={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickBack={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickNext={() => {}}
      />
    );

    expect(documentBody.getByTestId('pagenav').innerHTML).toMatch(
      'MuiIconButton-root Mui-disabled'
    );

    // expect(screen.getByLabelText('next')).toBeInTheDocument();
    // expect(screen.getByLabelText('back')).toBeInTheDocument();
    // screen.debug();
  });

  it('renders the component with next button  disabled', () => {
    documentBody = render(
      <PageNav
        backDisabled={false}
        nextDisabled={true}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickBack={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickNext={() => {}}
      />
    );

    expect(documentBody.getByTestId('pagenav').innerHTML).toMatch(
      'MuiIconButton-root Mui-disabled'
    );

    // expect(screen.getByLabelText('next')).toBeInTheDocument();
    // expect(screen.getByLabelText('back')).toBeInTheDocument();
    // screen.debug();
  });

  it('clicks on the next button', () => {
    const onClick = jest.fn();

    documentBody = render(
      <PageNav
        backDisabled={false}
        nextDisabled={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickBack={() => {}}
        clickNext={onClick}
      />
    );

    fireEvent(
      documentBody.getByLabelText('next'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalled();

    // expect(screen.getByLabelText('next')).toBeInTheDocument();
    // expect(screen.getByLabelText('back')).toBeInTheDocument();
    // screen.debug();
  });

  it('clicks on the back button', () => {
    const onClick = jest.fn();

    documentBody = render(
      <PageNav
        backDisabled={false}
        nextDisabled={false}
        clickBack={onClick}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        clickNext={() => {}}
      />
    );

    fireEvent(
      documentBody.getByLabelText('back'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalled();

    // expect(screen.getByLabelText('next')).toBeInTheDocument();
    // expect(screen.getByLabelText('back')).toBeInTheDocument();
    // screen.debug();
  });
});
