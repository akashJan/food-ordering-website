import React, { useEffect, useState } from "react";

const UserFun = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    // API Calls
    console.log("");
  }, []);
  return (
    <>
      <div>
        <h1>This is Class based component</h1>
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
      </div>
    </>
  );
};

export default UserFun;
