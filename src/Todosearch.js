import React from 'react';
import './App.css';

function TodoSearch({
  searchValue,
  setSearchValue,
  
}){
  
    return(
      <input placeholder= "Search your tasks" 
      className='search' 
      value={searchValue}
      onChange={ (evento)=>{
        setSearchValue(evento.target.value);
      }
      }
      />
    )
}


export {TodoSearch}