import React, { useState } from 'react'

const app5 = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCom = (idX) => {
    setTodos(
      todos.map((todo, i) => i === idX ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const deleTodo = (idX) => {
    setTodos(todos.filter((_, i) => i !== idX));
  }
  return (
    <div>
      <h1>
        Todo-List
      </h1>

      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {
          todos.map((todo, index) => (
            <li
              key={index}

            >
              <span onClick={() => toggleCom(index)}>{todo.text}</span>
              <button onClick={() => deleTodo(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default app5
