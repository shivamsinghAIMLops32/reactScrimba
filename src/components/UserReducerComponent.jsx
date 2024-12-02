import React,{ useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "newUserInput":
      return { ...state, userInput: action.payload };

    case "toggleColor":
      return { ...state, color: !state.color };

    case "changePassword":
      return { ...state, userPassword: action.payload };

    case "addByAmount":
      return { ...state, amount: state.amount + action.payload };

    case "subtractByAmount":
      return { ...state, amount: state.amount > 0 ? state.amount - action.payload : state.amount };

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
    amount: 0,
  });

  // Local state to handle input for "add" and "subtract" amounts
  const [addAmount, setAddAmount] = React.useState(0);
  const [subtractAmount, setSubtractAmount] = React.useState(0);

  return (
    <div>
      <h2>User Reducer Demo</h2>

      <label>
        Name:
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
        />
      </label>
      <h3>{`My name is: ${state.userInput}`}</h3>

      <label>
        Password:
        <input
          type="password"
          value={state.userPassword}
          onChange={(e) =>
            dispatch({ type: "changePassword", payload: e.target.value })
          }
        />
      </label>
      <h4>{`My password is: ${state.userPassword}`}</h4>

      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <div>
        <h3>Manage Amount</h3>
        <label>
          Add Amount:
          <input
            type="number"
            value={addAmount}
            onChange={(e) => setAddAmount(Number(e.target.value))}
          />
        </label>
        <button onClick={() => dispatch({ type: "addByAmount", payload: addAmount })}>
          Add
        </button>

        <label>
          Subtract Amount:
          <input
            type="number"
            value={subtractAmount}
            onChange={(e) => setSubtractAmount(Number(e.target.value))}
          />
        </label>
        <button
          onClick={() =>
            dispatch({ type: "subtractByAmount", payload: subtractAmount })
          }
        >
          Subtract
        </button>

        <h4>Current Amount: {state.amount}</h4>
      </div>
    </div>
  );
};

export default UserReducerComponent;
