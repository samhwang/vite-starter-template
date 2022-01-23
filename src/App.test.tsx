import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn React link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
