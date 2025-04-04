import React from 'react';
import FilterName from './FilterName';
import FilterSpecies from './FilterSpecies';

function Filters({onChangeName, onChangeSpecie}) {
  return (
    <form action="">
        <h4>Filtrar por...</h4>
        <FilterName onChangeName={onChangeName}/>
        <FilterSpecies onChangeSpecie={onChangeSpecie} />
    </form>
  )
}

export default Filters
