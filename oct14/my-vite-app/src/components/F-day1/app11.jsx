import React, { useState } from 'react'

function app11() {
    const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div>
         <div> <h2>Todo-list</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default app11
