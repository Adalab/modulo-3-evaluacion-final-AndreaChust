import React from 'react';
import FilterName from './FilterName';
import FilterSpecies from './FilterSpecies';

function Filters({onChangeName, onChangeSpecie}) {
  return (
    <form className="form-filter" action="">
        <h4 className='form-filter__text' >Filtrar por...</h4>
        <FilterName onChangeName={onChangeName}/>
        <FilterSpecies onChangeSpecie={onChangeSpecie} />
    </form>
  )
}

export default Filters
