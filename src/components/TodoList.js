import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, editHandler, clearList }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            editHandler={() => editHandler(todo.id)}
          />
        ))}

        <button type="button" className="clear-button" onClick={clearList}>
          <div className="clear-tx">Clear list</div>
        </button>
      </ul>
    </div>
  );
};

export default TodoList;
