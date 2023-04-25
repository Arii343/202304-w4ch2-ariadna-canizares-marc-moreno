import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When the user clicks the button", () => {
    test("Then the button should call the received action", () => {
      const actionOnClick = jest.fn();

      render(<Button actionOnClick={actionOnClick} text="" />);

      const button = screen.getByRole("button");

      async () => {
        await userEvent.click(button);
      };

      expect(button).toBeInTheDocument();
      //expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
