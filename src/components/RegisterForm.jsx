import React from "react";
import { useState } from "react";
const RegisterForm = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  const isDisabled =
    !formFields.username || !formFields.password || !formFields.displayName;
  // const [username,setUsername]=useState(""); // returns two array of having values
  // const [password,setPassword]=useState("");
  // const [displayName,setDisplayName]=useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = formFields.username;
          const password = formFields.password;
          const displayName = formFields.displayName;
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                displayName: displayName
            })
            })
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formFields.username}
            onChange={(e) =>
              setFormFields((currentState)=>({ ...formFields, username: e.target.value }))
            }
          />
        </div>
        <br />
        <div>
          {" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formFields.password}
            onChange={(e) =>
              setFormFields((currentState)=> ({ ...formFields, password: e.target.value }))
            }
          />
        </div>
        <br />
        <div>
          <label htmlFor="displayName">DisplayName</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formFields.displayName}
            onChange={(e) =>
              setFormFields({ ...formFields, displayName: e.target.value })
            }
          />
        </div>

        <button onClick={() => console.log(formFields)} disabled={isDisabled}>
          login
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
