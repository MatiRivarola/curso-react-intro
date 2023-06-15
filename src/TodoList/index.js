import "../App/App.css"

function TodoList( { children } ) {
    return(
      <ul className='task-for-complete'>
        {children}
      </ul>
    );
}

export {TodoList};