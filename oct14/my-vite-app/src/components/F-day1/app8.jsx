import React, { useState } from 'react'

function app8() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTask = () => { 
    if(task.trim()){
      setTodos([...todos,task]);
      setTask("");
    }
  };
  const deleteTask = (id) => { 
    setTodos(todos.filter((_,i)=>i!==id));
  };
  return (
    <div>
      <h2>Todo-List 3</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {
          todos.map((task,id)=>(
            <li key={id}>{task} <button onClick={()=>deleteTask(id)}>X</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default app8
