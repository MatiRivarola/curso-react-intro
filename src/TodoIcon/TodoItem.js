import '../App/App.css';
import React from 'react';
import { DeleteIcon } from "./DeleteIcon";
import {CompleteIcon} from "./CompleteIcon";

function TodoItem(props){
    return (
      <li className='todo-item'>
        
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />

        <p className={`todo-item-p ${props.completed && "todoItem-p-completed"}`} > {props.text} </p>
        
        <DeleteIcon
        onDelete={props.onDelete}
        />

      </li>
    );
};

export {TodoItem};