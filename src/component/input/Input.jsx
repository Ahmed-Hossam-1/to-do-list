import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/TodoSlice";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(
        saveTodo({
          id: Date.now(),
          title: input,
          done: false,
        })
      );
      setInput("");
    } else {
      alert("Plz Add Task");
    }
  };
  return (
    <form onSubmit={handelSubmit} className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default Input;
