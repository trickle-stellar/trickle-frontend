import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should render header when provided', () => {
    render(<Card header="My Header">Content</Card>);
    expect(screen.getByText('My Header')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(<Card footer={<button>Save</button>}>Content</Card>);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});
