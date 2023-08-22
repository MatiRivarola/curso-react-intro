import React from 'react';
import '../App'

function TodoCreate(){

  const [createTodo, setCreateTodo] = React.useState('')


    return(
      <textarea placeholder= "Comfort is not allowed here" 
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