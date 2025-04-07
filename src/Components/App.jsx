import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../Services/getCharactersFromApi";
import logo from "../Images/RickyMorty.jpg";
import CardDetail from "./CardDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

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

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      // if (specie === "") {
      //   return true;
      // } else {
      //   return specie === character.species;
      // }
      return specie === "" ? true : specie === character.species;
    });

      const {pathname} = useLocation();
      const routeData = matchPath("/detail/:id", pathname);

      let idCharacterRoute = undefined;
      if (routeData !== null) {
          idCharacterRoute = routeData.params.id;
      }
      const characterSelected = filteredCharacters.find((character) => {
        return character.id === parseInt(idCharacterRoute);

      });
      console.log(characterSelected);

  return (
    <>
      <header className="header">
        <img className="header__imglogo" src={logo} alt="" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <>
                    <Filters onChangeName={changeName} onChangeSpecie={changeSpecie} filterName={filterName} specie={specie} />
                    <CharacterList charactersData={filteredCharacters} />
                    </>
          )} />
          <Route path="/detail/:id" element={<CardDetail character={characterSelected} />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
