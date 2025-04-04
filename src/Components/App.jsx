import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../Services/getCharactersFromApi";

function App() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
       getCharactersFromApi().then(charactersList => {
        setCharacters(charactersList)
       });
       
    }, []);

  return (
    <>
      <header>
        <h3>Ricky Morty</h3>
      </header>
      <Filters />
      <main>
        <CharacterList charactersData={characters} />
      </main>
    </>
  );
}

export default App;
