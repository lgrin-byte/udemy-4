import { useEffect, useState } from "react";
const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTime(prev => prev + 1), 1000);

    // 리턴 시에 언마운트 된다!
    return () => {
      console.log("return!");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>time : {time}</p>
    </div>
  );
};
export default Timer;
