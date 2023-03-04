import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IndexPage from './index.page';

describe('Index Page', () => {
  it('should render Hi text', () => {
    render(<IndexPage />);
    const hiText = screen.getByText(/Hi/i);
    expect(hiText).toBeInTheDocument();
  });
});
