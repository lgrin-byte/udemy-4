import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "rtk-practice/countSlice";

// - configureStore로 store를 만든다. 
// - createSlice로 작은 store를 만든다. 
// - actionCreator 함수를 자동으로 만들어준다. 
// - immer.js가 내장 되어 있어서 불변하게 데이터를 처리하지 않아도 된다. 

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});

export default store;