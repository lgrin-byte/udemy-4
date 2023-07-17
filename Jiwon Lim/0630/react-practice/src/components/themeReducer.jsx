import { useReducer } from "react";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state.theme === "light" ? { theme: "dark" } : { theme: "light" };
    default:
      return state;
  }
};

const ThemeSwitcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>테마 색상 : {state.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        색상 변경
      </button>
    </div>
  );
};
export default ThemeSwitcher;
