import { useEffect, useState } from "react";
import Character from "../Character/Character";
import CharacterStructure from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const CharacterList = (): JSX.Element => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}`);
      const charactersApi = (await response.json()) as CharacterStructure[];
      loadCharacters(charactersApi);
    })();
  }, []);

  const loadCharacters = (charactersList: CharacterStructure[]): void => {
    setCharacters(charactersList);
  };

  return (
    <ul>
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </ul>
  );
};

export default CharacterList;
