import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders learn React link and the state number button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', {
      name: /count is: 0/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('increase the state number button when click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /count is: 0/i,
    });
    fireEvent.click(buttonElement);

    const countText = screen.getByText(/count is: 1/i);
    expect(countText).toBeInTheDocument();
  });
});
