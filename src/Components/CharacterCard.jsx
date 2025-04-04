import React from "react";
import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/detail/${characterData.id}`}>
      <img src={characterData.urlImage} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <p>{characterData.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
