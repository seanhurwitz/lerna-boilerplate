import { getUserFullName, User } from "@seanh/common";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:2050/users")
      .then((r) => r.json())
      .then((r) => setUsers(r));
  }, []);
  console.log("users", users);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.firstName}>{getUserFullName(user)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
