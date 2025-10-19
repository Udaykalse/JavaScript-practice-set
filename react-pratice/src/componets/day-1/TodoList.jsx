import React, { useState } from 'react'

function TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (task.trim() === '') return;
        setTodos([...todos, task]);
        setTask('');
    };
    const deleteTask = (idX) => {
        setTodos(todos.filter((_, i) => i !== idX))
    }

    return (
        <div>
            <h3>4️⃣ To-Do List</h3>
            <input type="text" name="name" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    todos.map((i, idX) => (
                        <li key={idX}>
                            {i}
                            <button onClick={()=>deleteTask(idX)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
