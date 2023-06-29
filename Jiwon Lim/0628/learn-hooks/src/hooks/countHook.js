import { useState } from "react";

//카운트 커스텀 훅 만들어봤다. 

const useCounter = initCount => {
  const [count, setCount] = useState(initCount);
  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
};

export default useCounter;
