import React, { useState } from 'react';
import ToDoInsert from './ToDoInsert';
import { useTheme } from 'styled-components';
import ToDoItems from './ToDoItems';

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    function addTask(task) {
        if (task.trim() === '') return; 
        setTasks([...tasks, task]);
    }
    function deleteTask(index){
        setTasks(tasks.filter((a,i)=> i !==index))
    }

    return (
        <>
        <div>
            <h1>ToDoList with React</h1>
            <ToDoInsert addTask={addTask}/>
            <div className='main'>{
            <ToDoItems tasks={tasks} deleteTask = {deleteTask}/>
            }
            </div>
        </div>
        </>
    );
};
export default ToDoList;