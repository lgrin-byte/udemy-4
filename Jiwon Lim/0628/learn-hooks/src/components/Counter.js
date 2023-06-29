import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>couter : {count}</h3>
      <button onClick={countUp}>click!!</button>
    </div>
  );
};
export default Counter;
