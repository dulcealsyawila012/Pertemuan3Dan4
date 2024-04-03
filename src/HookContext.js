import React, { useState, useContext } from "react";

const MyContext = React.createContext();

function Example3() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <MyContext.Provider value={{ message, setMessage }}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const { message, setMessage } = useContext(MyContext);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Hello from child")}>
        Change message
      </button>
    </div>
  );
}

export default Example3;