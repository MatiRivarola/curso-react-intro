import React from 'react'
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from './AppUI';

// const defaultTask = [
//   { text: 'Organizar cuarto', completed: true },
//   { text: 'cortar pasto', completed: false },
//   { text: 'Pasar react', completed: false },
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTask))



function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchTodos={searchTodos}
    checkTodo={checkTodo}
    deleteTodo={deleteTodo}

    />
  );
}




export default App;
