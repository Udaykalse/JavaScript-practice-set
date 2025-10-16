import React, { useState } from 'react'
const initialData = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
];
function app2() {
    const [students, setStudents] = useState(initialData);
    const handleDelete = (id) => {
        const updateStd = students.filter(student => student.id !== id);
        setStudents(updateStd);
    }
    return (
        <div>
            <h2>
                📋 2. Display JSON data in a table with add/delete row buttons
            </h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>
                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default app2
