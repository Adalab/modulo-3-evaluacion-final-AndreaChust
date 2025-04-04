import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ charactersData }) {
  return (
      <section>
        <ul>
          {
            charactersData.map((character) => {
              return <CharacterCard characterData={character}/>
            })
          }
          
        </ul>
      </section>
  )
}

export default CharacterList
