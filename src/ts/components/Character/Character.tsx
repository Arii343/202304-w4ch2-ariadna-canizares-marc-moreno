import CharacterStructure from "../../types";
import Button from "../Button/Button";

interface CharacterProps {
  character: CharacterStructure;
  actionOnClick: (id: number) => void;
  buttonText: string;
}

const Character = ({
  character: { created, height, mass, name, id },
  actionOnClick,
  buttonText,
}: CharacterProps) => {
  return (
    <li>
      <ul>
        <li>{name}</li>
        <li>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={name}
          />
        </li>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
        <li>Created: {created}</li>
        <Button text={buttonText} actionOnClick={() => actionOnClick(id)} />
      </ul>
    </li>
  );
};

export default Character;
