import React, { useState } from 'react'

function app6() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h2>Todo List 1</h2>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {
          todos.map((t, i) => (
            <li key={i}>
              {t}
              {" "}
              <button onClick={()=>deleteTask(i)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default app6
