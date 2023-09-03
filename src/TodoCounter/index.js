import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({total , completed }){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return(
      <h1>
        You are completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS
      </h1>
    )
}


export {TodoCounter}