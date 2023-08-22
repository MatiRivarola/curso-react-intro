import React from "react";
import { TodoCounter } from '../TodoCounter/index';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoIcon/TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import './App.css';
import { TodoSearch } from '../Todosearch';
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

function AppUI(){
  const {
    loading,
    error,
    searchTodos,
    checkTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return(
    <>
      <div className="container">
        <TodoForm/>

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