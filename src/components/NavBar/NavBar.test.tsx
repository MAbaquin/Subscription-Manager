import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import { DASHBOARD_BUTTON_TEXT, SUBSCRIPTIONS_BUTTON_TEXT, SETTINGS_BUTTON_TEXT } from './constants';

test('renders NavBar component', () => {
  render(<NavBar />);
  expect(screen.getByText(DASHBOARD_BUTTON_TEXT)).toBeInTheDocument();
  expect(screen.getByText(SUBSCRIPTIONS_BUTTON_TEXT)).toBeInTheDocument();
  expect(screen.getByText(SETTINGS_BUTTON_TEXT)).toBeInTheDocument();
});