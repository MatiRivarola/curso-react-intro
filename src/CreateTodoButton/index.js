import React from 'react';
import '../App/App.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <button type="submit" 
        className= 'primary-button'
        onClick={() => {
            setOpenModal(state => !state)
        }}
        >
            Create Task
        </button>

    );
    
}
function CancelButton() {
    return(
        <button type="" className= 'secondary-button'>
            Cancel
        </button>
    )
}

export {CreateTodoButton};

export {CancelButton};