import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeMessage from './WelcomeMessage';

describe('WelcomeMessage Component', () => {
  it('renders with default username when no userName prop is provided', () => {
    render(<WelcomeMessage />);

    expect(screen.getByText(/Guest/)).toBeInTheDocument();
  });

  it('renders with default username when no userName prop is undefined', () => {
    render(<WelcomeMessage userName={undefined} />);

    expect(screen.getByText(/Guest/)).toBeInTheDocument();
  });

  it('renders with provided userName prop', () => {
    render(<WelcomeMessage userName="John" />);

    expect(screen.getByText(/John/)).toBeInTheDocument();
  });
});
