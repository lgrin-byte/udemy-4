import { useSelector, useDispatch } from "react-redux";
import { UP } from "rtk-practice/countSlice";
 
const Counter = () => {
  const count = useSelector(state => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h3>value : {count}</h3>
      <button onClick={() => dispatch(UP(5))}>count up!</button>
    </div>
  );
};

export default Counter;
