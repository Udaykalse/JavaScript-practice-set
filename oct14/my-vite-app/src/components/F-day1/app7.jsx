import React, { useState } from 'react'

function app7() {
  const [task, setTasks] = useState("");
  const [todos, setTodos] = useState([]);
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTasks("");
    }
  }

  const deleteTask = (idX) => {
    setTodos(todos.filter((_, i) => i !== idX))
  }
  return (
    <div>
      <h2>Todo-List 2</h2>
      <input type="text" onChange={(e) => setTasks(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {
          todos.map((i, idX) => (
            <li key={idX}>{i}
              <button onClick={() => deleteTask(idX)}>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default app7
