import React, { useEffect, useState } from 'react'

function UserTable() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.log(err))
    })
    return (
        <div>
            <h3>🌐 2️⃣ API Call using useEffect and Display Data in Table</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>UserName</td>
                    </tr>
                </thead>
                <tbody>
                   { user.map((u)=>(
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
