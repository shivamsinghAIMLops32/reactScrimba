import React, { useState } from "react";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "email1" },
    { id: 2, username: "user2", email: "email2" },
    { id: 3, username: "user3", email: "email3" },
    { id: 4, username: "user4", email: "email4" },
  ]);

  const addingNewUser = () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Calculate new ID
    const newUser = {
      id: newId,
      username: `newUser${newId}`,
      email: `newUser${newId}@email.com`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <>
      {users.map((user) => (
        <UserDetails user={user} key={user.id} setUsers={setUsers} />
      ))}
      <br />
      <button onClick={addingNewUser}>Add New User</button>
    </>
  );
};

export default App;
