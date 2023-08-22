import React from "react";
import { TodoCounter } from '../TodoCounter/index';
import { TodoCreate} from '../TodoCreate/TodoCreate';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoIcon/TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { CancelButton } from '../CreateTodoButton';
import './App.css';
import { TodoSearch } from '../Todosearch';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI(){
  const {
    loading,
    error,
    searchTodos,
    checkTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return(
    <>
      <div className="container">
        <form onSubmit={(event) =>{
          event.preventDefault();
        } } 
        className="inicio">
          <h1 className='title-principal-task' >Create a new Task</h1>
          <h3 className='title-secondary-task'>Task name</h3>
          <TodoCreate/>

          <div className='new-task-button'>

            <div className="buttons-creaters">
              <CreateTodoButton/>
              <CancelButton/>
            </div>
            
          </div>

        </form>

        <div className="fin">
          <h1 className="title-task">Your Tasks</h1>
          <TodoCounter/>
          <TodoSearch/>
          <section>
            <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchTodos.length === 0) && <TodosEmpty/> }

              {searchTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => checkTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

          </section>
        </div>
          

      </div>
    </>
    );
};

export {AppUI};