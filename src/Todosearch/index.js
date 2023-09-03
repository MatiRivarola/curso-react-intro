import React from 'react';
import '../App/App.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

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