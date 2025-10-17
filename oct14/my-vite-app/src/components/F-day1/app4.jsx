import React from 'react'


const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
];
function app4() {
  return (
    <div>
      <h1>Table Oct 17</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((std) => (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default app4
