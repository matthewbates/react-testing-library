import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
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
