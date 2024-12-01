import React, { useState } from "react";

const LoginForm = () => {
   const [username, setUsername]= useState("");
   const [password, setPassword]= useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <br />
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
