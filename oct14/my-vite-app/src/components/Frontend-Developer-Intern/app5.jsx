import React, { useEffect, useState } from 'react'

function app5() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error(err))
    },[]);
    return (
        <div>
            <h2>
                🌐 5. Fetch API data using useEffect and display it in a component
            </h2>
            <ul>
                {
                    user.map((user)=>(
                        <li key={user.id}>{user.name} : {user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default app5
