import React from 'react';
import './App.css'

function TodoCreate(){

  const [createTodo, setCreateTodo] = React.useState('')


    return(
      <input placeholder= "Comfort is not allowed here" 
      className='create-todo'
      values={createTodo}
      onChange={ (evento)=>{
        setCreateTodo(evento.target.values)

      }
      }
      />
    )
}


export {TodoCreate}