import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TodoIcon } from "./TodoIcon";


function DeleteIcon(){
    return (
        <TodoIcon
            type="delete"
            color="red"
        />
    );
}


export { DeleteIcon };