import React, { useState } from 'react'
const initialStudents = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 22, grade: "B" },
    { id: 3, name: "Charlie", age: 21, grade: "C" },
];

function table2() {
    const [students, setStudents] = useState(initialStudents);
    const handelDeletd = (id) => {
        const updatedStudent = students.filter(student => student.id !== id);
        setStudents(updatedStudent);
    }
    return (
        <div>
            <h2>Table 2</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grede</th>
                        <th>ActionI</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.grade}</td>
                                <td>
                                    <button onClick={() => handelDeletd(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default table2
