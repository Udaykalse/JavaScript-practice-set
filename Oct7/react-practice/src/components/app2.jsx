import React, { useEffect, useState } from 'react'

const app2 = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.console.error(err)
      )
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>API Call</h1>
      <ul>
        {
          user.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default app2
