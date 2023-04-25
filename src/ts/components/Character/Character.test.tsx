import { render, screen } from "@testing-library/react";
import CharacterStructure from "../../types";
import Character from "./Character";

describe("Given a Character component", () => {
  describe("When it receives the name 'Luke'", () => {
    test("Then it should return a component with the name 'Luke'", () => {
      const expectedName = "Luke";

      const lukeCharacter: CharacterStructure = {
        created: "",
        height: 0,
        id: 0,
        mass: 0,
        name: expectedName,
      };

      const actionOnClick = jest.fn();

      render(
        <Character
          character={lukeCharacter}
          actionOnClick={actionOnClick}
          buttonText=""
        />
      );

      const name = screen.getByRole("img");

      expect(name).toBeInTheDocument();
    });
  });
});
