import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoCreate} from './TodoCreate';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { CancelButton } from './CreateTodoButton';
import './App.css'
import { TodoSearch } from './Todosearch';


const defaultTask = [
  { text: 'Organizar cuarto', completed: true },
  { text: 'cortar pasto', completed: false },
  { text: 'Pasar react', completed: false },
];

function App() {

  

  const [todos, SetTodos] = React.useState(defaultTask);
  const [searchValue, setSearchValue] = React.useState('');
  

  const completedTodos= todos.filter( todo => !!todo.completed).length ;
  const totalTodos= todos.length;

  const searchTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  

  const checkTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true
    SetTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    SetTodos(newTodos);
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
