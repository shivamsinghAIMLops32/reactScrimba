import React, { useState } from "react";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "email1" },
    { id: 2, username: "user2", email: "email2" },
    { id: 3, username: "user3", email: "email3" },
    { id: 4, username: "user4", email: "email4" },
  ]);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
  });

  const addingNewUser = () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ username: "", email: "" }); // Reset newUser
  };

  return (
    <>
      {users.map((user) => (
        <UserDetails user={user} key={user.id} setUsers={setUsers} />
      ))}
      <br />

      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="newUser"
        name="newUser"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <br />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="newEmail"
        name="newEmail"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <br />

      <button onClick={addingNewUser} disabled={!newUser.username || !newUser.email}>
        Add New User
      </button>
    </>
  );
};

export default App;
