import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When the user clicks the button", () => {
    test("Then the button should call the received action", async () => {
      const actionOnClick = jest.fn();

      render(<Button actionOnClick={actionOnClick} text="" />);
      const button = screen.getByRole("button", { name: "Delete button" });
      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When we create a button with the text 'hello'", () => {
    test("Then the button is showed with the text 'hello'", () => {
      const actionOnClick = jest.fn();
      const expectedText = "hello";

      render(<Button actionOnClick={actionOnClick} text={expectedText} />);
      const button = screen.getByText("hello");

      expect(button).toBeInTheDocument();
    });
  });
});
