import React from "react";
import '../App/App.css'
import { TodoContext } from "../TodoContext";


function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue , setNewTodoValue] = React.useState('')
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
        setNewTodoValue('')
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)};

    const handleButtonEnter = (event) =>{
        if (event.key === 'Enter'){
            onSubmit();
        }
    };
    return (
        <>
        <form onSubmit={onSubmit}
        className="inicio">
            <h1 className='title-principal-task' >Create a new Task</h1>
            <h3 className='title-secondary-task'>Task name</h3>
            <input placeholder= "Comfort is not allowed here"
            className='create-todo'
            value={newTodoValue}
            type="text"
            onChange={ onChange }
            onKeyUp={handleButtonEnter}
            required/>
            
            <div className='new-task-button'>
                <div className="buttons-creaters">
                    <button type="submit" 
                    className= 'primary-button'>
                            Create Task
                    </button>

                    <button type="button" 
                    className= 'secondary-button'
                    onClick={onCancel}>
                        Cancel
                    </button>
                </div> 
            </div>
        </form>
        </>
    )
};

export {TodoForm}