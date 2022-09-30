import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/i)
  expect(buttonElement).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/i)
  expect(buttonElement).toHaveClass(/submit-button/i);
});

// test('renders submit button', () => {
//   render(<App />);
//   const buttonElement = screen.getByPlaceholderText(/submit button/i)
//   expect(buttonElement);
// });