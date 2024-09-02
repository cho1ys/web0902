import React from 'react';
import { useState } from 'react';
const ToDoInsert = ({addTask}) => {
    const [input, setInput] = useState(''); 
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addTask(input); 
        setInput(''); 
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange}/>
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default ToDoInsert;