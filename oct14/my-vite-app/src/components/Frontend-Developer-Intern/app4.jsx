import React, { useState } from 'react'

function app4() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>🔢 4. Implement a Counter App using useState</h2>
      <table>
        <thead>
          <tr>
            <th>Counter</th>
            <th>Plus</th>
            <th>Minus</th>
            <th>reset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{counter}</td>
            <td>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </td>
            <td>
              <button onClick={() => setCounter(counter - 1)}>-</button>
            </td>
            <td>
              <button onClick={() => setCounter(0)}>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* 
      <h3>Counter:- {counter}</h3>
     
    */}
    </div>
  )
}

export default app4
