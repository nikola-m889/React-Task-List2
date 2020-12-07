import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ todoInput, setTodoInput, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: todoInput, completed: false, id: uuidv4() }]);
    setTodoInput("");
  };

  return (
    <form>
      <input
        value={todoInput}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Enter your task.."
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="far fa-plus-square"></i>
      </button>
    </form>
  );
};

export default TodoForm;
