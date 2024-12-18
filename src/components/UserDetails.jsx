import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  // Sync state when user prop changes
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
  }, [user]);

  const handleSave = () => {
    setUsers((currentUsersState) =>
      currentUsersState.map((currentUser) =>
        currentUser.id === user.id
          ? { ...currentUser, username, email } // Update the user
          : currentUser
      )
    );
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <span>{username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{email}</span>
        )}
        <br />
      </div>
      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() =>
            setUsers((currentUsersState) =>
              currentUsersState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            )
          }
        >
          Delete
        </button>
      </div>
      <br />
    </div>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
