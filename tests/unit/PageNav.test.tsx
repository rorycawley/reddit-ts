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
    render(<PageNav />);

    expect(screen.getByTestId('pagenav')).toBeInTheDocument();
  });

  it('renders the component with back and next buttons disabled by default', () => {
    render(<PageNav />);

    expect(screen.getByLabelText('next')).toBeDisabled();
    expect(screen.getByLabelText('back')).toBeDisabled();
  });

  it('renders the component with back and next buttons enabled', () => {
    render(<PageNav backDisabled={true} nextDisabled={true} />);

    expect(screen.getByLabelText('next')).toBeDisabled();
    expect(screen.getByLabelText('back')).toBeDisabled();
  });

  it('renders the component with back button enabled', () => {
    render(<PageNav backDisabled={true} nextDisabled={false} />);

    expect(screen.getByLabelText('back')).toBeDisabled();
    expect(screen.getByLabelText('next')).not.toBeDisabled();
  });

  it('renders the component with next button enabled', () => {
    render(<PageNav backDisabled={false} nextDisabled={true} />);

    expect(screen.getByLabelText('back')).not.toBeDisabled();
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('renders the component with back and next buttons', () => {
    render(<PageNav backDisabled={false} nextDisabled={false} />);

    expect(screen.getByLabelText('next')).not.toBeDisabled();
    expect(screen.getByLabelText('back')).not.toBeDisabled();
  });

  it('clicks on the next button', () => {
    const onClick = jest.fn();

    documentBody = render(
      <PageNav backDisabled={false} nextDisabled={false} clickNext={onClick} />
    );

    fireEvent(
      documentBody.getByLabelText('next'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalled();
  });

  it('clicks on the back button', () => {
    const onClick = jest.fn();

    documentBody = render(
      <PageNav backDisabled={false} nextDisabled={false} clickBack={onClick} />
    );

    fireEvent(
      documentBody.getByLabelText('back'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalled();
  });
});
