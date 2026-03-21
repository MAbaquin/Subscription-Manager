import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders the heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
});

test('renders logo links', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: /vite logo/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /react logo/i })).toBeInTheDocument();
});

test('count starts at 0', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
});

test('count increments on button click', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /count is 0/i });
  await userEvent.click(button);
  expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  expect(screen.getByText(/click on the vite and react logos/i)).toBeInTheDocument();
});
