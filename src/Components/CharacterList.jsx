import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({ charactersData }) {
  return (
    <section>
      <ul className="list">
        {charactersData.map((character) => {
          return <CharacterCard characterData={character} key={character.id} />;
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
