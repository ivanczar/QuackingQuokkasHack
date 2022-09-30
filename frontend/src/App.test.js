import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Form from "./App";

test("renders submit button", () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/);
  expect(buttonElement).toBeInTheDocument();
});

test('submit button class is "submit-button"', () => {
  render(<App />);
  const buttonElement = screen.getByPlaceholderText(/submit button/i);
  expect(buttonElement.className).toBe("submit-button");
});

test("does not submit when pressing submit after invalid email", () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<Form onSubmit={handleSubmit} />);

  const name = getByPlaceholderText("Pet Name*");
  const email = getByPlaceholderText("Email Address*");

  fireEvent.change(name, { target: { value: "abc" } });
  fireEvent.change(email, { target: { value: "abc@123.com" } });

  fireEvent.submit(getByTestId("form"));

  expect(handleSubmit).toHaveBeenCalled();
});
