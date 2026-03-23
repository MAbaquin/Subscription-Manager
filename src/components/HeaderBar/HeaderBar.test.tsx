import { expect, test } from "@jest/globals";
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from "@testing-library/react";
import { HeaderBar } from "./HeaderBar";
import { LOGOUT_BUTTON_TEXT } from "./constants";


test('renders HeaderBar component', () => {
  render(<HeaderBar />);
  expect(screen.getByText(LOGOUT_BUTTON_TEXT)).toBeInTheDocument();
});