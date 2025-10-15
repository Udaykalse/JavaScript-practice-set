import React, { useState } from 'react'
const initialStudents = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 22, grade: "B" },
    { id: 3, name: "Charlie", age: 21, grade: "C" },
];
function table5() {
    const [students, setStudent] = useState(initialStudents);
    const handleDelete = (id) => {
        const updatedStudent = students.filter(student => student.id !== id);
        setStudent(updatedStudent);
    }

    return (
        <div>
            <h2>Table 5</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Grade</td>
                        <td>Button</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.grade}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>                        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default table5
