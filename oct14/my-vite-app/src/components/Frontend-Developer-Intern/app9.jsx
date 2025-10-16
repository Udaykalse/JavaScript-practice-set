import React, { useState } from 'react'

function app9() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleAdd = () => {
        if (task.trim() === '') return;
        setTask([...task, { id: Date.now(), text: task, completed: false }]);
        setTask('');
    }
    const handleDelete = (id) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }
    const handleToggle = (id) => {
        setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t))
    }
    return (
        <div>
            <h2>📝 Question: Todo List App</h2>
            <input type="text" name="" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    tasks.map((t) => (
                        <li key={t.id}>
                            {t.text} {" "}
                            <button onClick={() => handleToggle(t.id)} style={{ marginLeft: '10px' }}>
                                {t.completed ? 'Undo' : 'Done'}
                            </button>
                            <button onClick={() => handleDelete(t.id)}>delete</button>
                        </li>
                ))
                }
            </ul>
        </div>
    )
}

export default app9
