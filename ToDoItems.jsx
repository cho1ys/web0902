import React, { useState } from 'react';
import './ToDoItems.scss'
const ToDoItems = (p) => {
    const {tasks, deleteTask} = p
    const [isChecked, setCheck] = useState(false)
    function isCheck(){

    }
    return (
        <>
        {
            tasks.map((lists,index) =>(
                <div>
                <input type='checkbox' onChange={isCheck}/> 
                <li key={index}>{lists}
                    <button onClick={()=>deleteTask(index)}>삭제</button>
                </li>
                </div>
            ))
        }
        </>
    );
};

export default ToDoItems;