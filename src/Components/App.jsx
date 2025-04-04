import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../Services/getCharactersFromApi";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [specie, setSpecie] = useState("");

  useEffect(() => {
    getCharactersFromApi().then((charactersList) => {
      setCharacters(charactersList);
    });
  }, []);

  const changeName = (valueInput) => {
    setFilterName(valueInput);
  };

  const changeSpecie = (specieInput) => {
    setSpecie(specieInput);
    
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName);
  }).filter((character) => {
    // if (specie === "") {
    //   return true;
    // } else {
    //   return specie === character.species;
    // }
    return specie === "" ? true : specie === character.species;
  })

  return (
    <>
      <header>
        <h1>Ricky & Morty</h1>
      </header>
      <Filters onChangeName={changeName} onChangeSpecie={changeSpecie} />
      <main>
        <CharacterList charactersData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
