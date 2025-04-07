import React from 'react';
import FilterName from './FilterName';
import FilterSpecies from './FilterSpecies';

function Filters({onChangeName, onChangeSpecie, filterName, specie}) {
  return (
    <form className="form-filter" action="">
        <h4 className='form-filter__text' >Filtrar por...</h4>
        <FilterName onChangeName={onChangeName} filterName={filterName}/>
        <FilterSpecies onChangeSpecie={onChangeSpecie} specie={specie} />
    </form>
  )
}

export default Filters
