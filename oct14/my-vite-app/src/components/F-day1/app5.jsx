import React, { useEffect, useState } from 'react'

function app5() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(users)
  return (
  <div>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}

      </ul>
    </div>
  )
}

export default app5
