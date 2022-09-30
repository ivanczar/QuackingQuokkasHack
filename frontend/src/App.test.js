import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/);
  expect(buttonElement).toBeInTheDocument();
});

test('submit button class is "submit-button"', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/i);
  expect(buttonElement.className).toBe("submit-button");
});

test("does not submit when pressing submit after no email", () => {
  render(<App />);
  const handleSubmit = jest.fn();
  const name = screen.getByPlaceholderText("Pet Name*");
  const email = screen.getByPlaceholderText("Pet Name*");

  fireEvent.change(name, { target: { value: "abc" } });
  fireEvent.change(email, { target: { value: "abc@abc.com" } });

  fireEvent.click(input, { key: "Enter", code: 13, charCode: 13 });

  expect(handleSubmit).toHaveBeenCalled();
});
