import React from "react";
import { useReducer } from "react";


// so basically user reducer takes and reducer function which can be implemented via switch case
// the reducer function takes state and action parameter
// where the {action.type} is the action parameter is passed in switch and action.payload is the payload given in input field
// {state.theVariableNameorintialstatename} is used to acced the value or state variable
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "newUserInput":
      return { ...state, userInput: action.payload }; // action.payload would be dispatched

    case "toggleColor":
      return { ...state, color: !state.color };

    case "changePassword":
      return { ...state, userPassword: action.payload };

    default:
      throw new Error("Invalid action");
  }
};

const UserReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    userPassword: "",
    color: false,
  });
  return (
    <>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "newUserInput", payload: e.target.value })
        }
      />
      <br />

      <h3>{` my name is ${state.userInput}`}</h3>
      <br />
      <br />
      <input
        type="password"
        value={state.userPassoword}
        onChange={(e) =>
          dispatch({ type: "changePassword", payload: e.target.value })
        }
      />
      <h4>{`my password is ${state.userPassword}`}</h4>
      <br />
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

export default UserReducerComponent;
