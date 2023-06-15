import React from 'react'
import { TodoCounter } from '../TodoCounter/index';
import { TodoCreate} from '../TodoCounter/TodoCreate';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoIcon/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { CancelButton } from '../CreateTodoButton';
import './App.css'
import { TodoSearch } from '../Todosearch';
import { useLocalStorage } from "./useLocalStorage";

// const defaultTask = [
//   { text: 'Organizar cuarto', completed: true },
//   { text: 'cortar pasto', completed: false },
//   { text: 'Pasar react', completed: false },
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTask))



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  

  const completedTodos = todos.filter( todo => !!todo.completed).length ;
  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  

  const checkTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem[todoIndex].completed = true
    saveTodos(newItem);
  }
  
  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem.splice(todoIndex,1)
    saveTodos(newItem);
  }


  return (
    <>
      <div className="container">
        <div className="inicio">
          <h1 className='title-principal-task' >Create a new Task</h1>
          <h3 className='title-secondary-task'>Task name</h3>
          <TodoCreate/>

          <div className='new-task-button'>
            <CreateTodoButton/>
            <CancelButton/>
          </div>

        </div>

        <div className="fin">
          <h1 className="title-task">Your Tasks</h1>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
          searchValue= {searchValue}
          setSearchValue={setSearchValue}
          />
          <section>
            <TodoList>
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
}




export default App;
