import React from "react";
import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li className="card-list">
      <Link to={`/detail/${characterData.id}`}>
      <img className="img-card" src={characterData.urlImage} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <p>{characterData.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
