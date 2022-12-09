import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// string description and test function
// the first thing you want to do after the string description is defined is render the component
// next, find the element you're interested in by screen that has access to the virtual DOM by render
test("button has correct initial color", () => {
  render(<App />);
  // first argument will be a string representing the role (button)
  // second argument is the options (as a string or regex)
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ background: "red" });
  // click button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ background: "blue" });
  // expect the button text to be /change to red/i
  expect(colorButton).toHaveTextContent(/change to red/i);
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
  //check taht the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // first fireEvent should disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  // second fire event should re-enable the button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  // change button to blue
  fireEvent.click(colorButton);
  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
