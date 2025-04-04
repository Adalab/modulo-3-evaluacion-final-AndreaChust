import React from 'react'

function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.urlImage} alt="" />
      <h4>{characterData.name}</h4>
      <p>{characterData.species}</p>
    </li>
  )
}

export default CharacterCard
