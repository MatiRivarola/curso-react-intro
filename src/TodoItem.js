import './App.css';
import React from 'react';
import { DeleteIcon } from "./DeleteIcon";
import {CompleteIcon} from "./CompleteIcon";

function TodoItem(props){
    return (
      <li className='todo-item'>
        
        <CompleteIcon/>

        <p className={`todo-item-p ${props.completed && "todoItem-p-completed"}`} > {props.text} </p>
        
        <DeleteIcon/>

      </li>
    );
};

export {TodoItem};