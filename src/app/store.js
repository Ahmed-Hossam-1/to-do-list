import { configureStore } from "@reduxjs/toolkit";
import TodoReduser from "../features/TodoSlice";
const store = configureStore({
  reducer: {
    todos: TodoReduser,
  },
});

export default store;
