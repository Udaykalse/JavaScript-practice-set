import React from 'react'
const students = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'C' },
];

function App11() {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((std) => (
                            <tr key={std.id}>
                                <td>{std.id}</td>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.grade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App11
