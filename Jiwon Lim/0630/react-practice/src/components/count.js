import { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>카운트 : {count}</div>
      <button onClick={onClick}>click!</button>
    </div>
  );
};
export default Count;
