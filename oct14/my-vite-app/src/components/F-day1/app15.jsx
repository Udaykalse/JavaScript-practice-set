import React, { useState } from 'react'

function app15() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);


  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const deleteTask = (idX) => {
    setTodos(todos.filter((_, i) => i !== idX))
  };

  return (
    <div>
      <h2>Todo-List 6</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {
          todos.map((t, i) => (
            <li key={i}>{t} <button onClick={() => deleteTask(i)}>X</button></li>
          ))
        }
      </ul>

    </div>
  )
}

export default app15
