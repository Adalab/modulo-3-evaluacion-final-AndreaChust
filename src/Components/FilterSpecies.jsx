import React from "react";

function FilterSpecies({ onChangeSpecie }) {
  const handleRadio = (ev) => {
    onChangeSpecie(ev.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="specie">Especie: </label>
      <label htmlFor="Human" className="container__human">Human</label>
      <input
        type="radio"
        id="Human"
        name="specie"
        value="Human"
        onChange={handleRadio}
      />
      <label htmlFor="Alien" className="container__human__specie">Alien</label>
      <input
        type="radio"
        id="Alien"
        name="specie"
        value="Alien"
        onChange={handleRadio}
      />
    </div>
  );
}

export default FilterSpecies;
