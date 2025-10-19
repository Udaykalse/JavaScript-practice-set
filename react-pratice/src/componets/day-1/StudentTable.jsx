import React from 'react'

function StudentTable() {
     const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 21 },
  ];
  return (
    <div>
      <h3>3️⃣ JSON Data → Table</h3>
      <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
            {
                students.map((std)=>(
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

export default StudentTable
