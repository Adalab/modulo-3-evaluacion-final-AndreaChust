import React from "react";

function FilterName({ onChangeName, filterName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div className="container">
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" onChange={handleChangeName} value={filterName} className="search-input" placeholder="Ej: Summer Smith" />
    </div>
  );
}

export default FilterName;
