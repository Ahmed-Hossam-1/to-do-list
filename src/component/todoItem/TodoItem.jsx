import { useDispatch } from "react-redux";
import { setCheck } from "../../features/TodoSlice";

const TodoItem = ({ title, done, id }) => {
  const dispatch = useDispatch();
  const handelChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        checked={done}
        onChange={handelChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default TodoItem;
