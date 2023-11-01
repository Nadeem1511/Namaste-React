import { useState } from "react";

const User = ({ name, age, mail }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to increase count
      </button>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <h3>Email : {mail}</h3>
    </div>
  );
};

export default User;
