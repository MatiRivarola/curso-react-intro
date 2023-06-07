import './App.css';
import React from 'react';
import { DeleteIcon } from "./DeleteIcon";
import {CompleteIcon} from "./CompleteIcon"

function TodoItem(props){
  // const [color, setIsOn] = React.useState('none')
  // function handleClick(){
  //   setIsOn('green');
  // }
    return (
      <li className='todo-item'>
        <CompleteIcon/>
        {/* <span className={`icon icon-check ${props.completed && "icon-check--active"}`} 
        onClick={props.onComplete}
        >
          V
        </span> */}
        
        <p className={`todo-item-p ${props.completed && "todoItem-p-completed"}`} > {props.text} </p>
        <DeleteIcon/>
        {/* <span className='icon icon-delete' 
        onClick={props.onDelete}
        >
          X
        </span> */}
      </li>
    );
};

export {TodoItem};