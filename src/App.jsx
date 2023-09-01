import { useSelector } from "react-redux";
import "./App.css";
import Input from "./component/input/Input";
import TodoItem from "./component/todoItem/TodoItem";

const App = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  return (
    <div className="app">
      <div className="todo-container">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            done={todo.done}
            id={todo.id}
          />
        ))}
      </div>
      <Input />
    </div>
  );
};

export default App;
