import React, { useEffect, useState } from 'react';

function App6() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())   // Fix: res.json()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>API Call</h2>
      <ul>
        {users.slice(5, 10).map((u) => (
          <li key={u.id}>
            {u.name}: {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App6;
