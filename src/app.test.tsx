import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App component', () => {
  it('increase the state number button when click', () => {
    render(<App />);
    const hiText = screen.getByText(/Hi/i);
    expect(hiText).toBeInTheDocument();
  });
});
