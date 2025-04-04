import React from 'react'

function CardDetail({ character }) {
  return (
    <section className='cardDetail'>
        <img src={character.urlImage} alt={character.name} />
        <div className='cardDetail__contcard'>
        <h2>{character.name}</h2>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin}</p>
        <p>Episodes: {character.episode}</p>
        <p>Status: {character.status}</p>
        </div>
    </section>
  )
}

export default CardDetail
