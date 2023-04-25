import CharacterStructure from "../../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { created, height, mass, name, id },
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
        <li>{height}</li>
        <li>{mass}</li>
        <li>{created}</li>
      </ul>
    </li>
  );
};

export default Character;
