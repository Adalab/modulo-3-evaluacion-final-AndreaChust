import React from "react";

function FilterName({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" onChange={handleChangeName} />
    </div>
  );
}

export default FilterName;
