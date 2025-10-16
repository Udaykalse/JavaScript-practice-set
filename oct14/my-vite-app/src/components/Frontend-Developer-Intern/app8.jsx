import React, { useEffect, useState } from 'react'

function app8() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
    })
    return (
        <div>
            <h1>🌐 Fetch and Display API Data</h1>
            <ul>
                {
                    users.map((user) => (
                        <li>{user.name} : {user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default app8
