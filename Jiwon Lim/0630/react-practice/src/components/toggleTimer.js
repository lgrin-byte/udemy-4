import { useState } from "react";
import Timer from "./timer";

const ToggleTimer = () => {
  const [showTimer, setShowTimer] = useState(true);

  const handleToggleTimer = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={handleToggleTimer}>
        {showTimer ? "hide timer" : "show timer"}
      </button>
    </div>
  );
};
export default ToggleTimer;
