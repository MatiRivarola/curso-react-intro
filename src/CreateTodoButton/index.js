import '../App.css'

function CreateTodoButton() {
    return(
        <button type="submit" 
        className= 'primary-button'>
            Create Task
        </button>
    );
    
}
function CancelButton() {
    return(
        <button type="button" className= 'secondary-button'>
            Cancel
        </button>
    )
}

export {CreateTodoButton};

export {CancelButton};