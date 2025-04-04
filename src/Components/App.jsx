import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  return (
    <>
      <header>
        <h3>Ricky Morty</h3>
      </header>
      <Filters />
      <main>
        <CharacterList />
      </main>
    </>
  );
}

export default App;
