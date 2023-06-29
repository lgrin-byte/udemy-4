import useCounter from "../hooks/countHook";

const UseCount = () => {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <h3>couter :{count}</h3>
      <button onClick={increment}>click!!</button>
    </div>
  );
};
export default UseCount;
