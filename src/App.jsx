import React from "react";
import UserProfile from "./components/UserProfile";

const userData = [
  {
    name: "john cena",
    age: 40,
    email: "johncena80@gmail.com",
    isSubscribed: true
  },
  {
    name: "brock lesnar",
    age: 50,
    email: "brocklesnar50@gmail.com",
    isSubscribed: true
  },
];

const Fruits = ["apple", "orange", "banana"];
const App = () => {
  return (
    <>
    {Fruits}
      {userData.map((user,index) => (
        <UserProfile key={index} user={user}>hello</UserProfile>
        
      ))}
    </>
  );
};
export default App;
