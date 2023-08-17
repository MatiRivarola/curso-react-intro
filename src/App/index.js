import React from 'react'
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {


  return (
    <TodoProvider>
      <AppUI
    // loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchTodos={searchTodos}
    // checkTodo={checkTodo}
    // deleteTodo={deleteTodo}
      />
    </TodoProvider>
  
  );
}




export default App;
