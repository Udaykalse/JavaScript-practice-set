import React, { useState } from 'react'

function app3() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setList([...list, { id: Date.now(), text: task }]);
            setTask("")
        };
    };

    const deleteTask = (id) => setList(list.filter((item) => item.id !== id));
    return (
        <div>
            <h2>
                ✅ 3. Build a Todo List using functional components
            </h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => deleteTask(item.id)}>Delet</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default app3
