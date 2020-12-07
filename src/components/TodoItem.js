import React from "react";

const TodoItem = ({ title, todo, todos, setTodos, editHandler }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={todo.completed ? "todo todo-comp" : "todo"}>
      <li className={todo.completed ? "todo-item completed" : "todo-item"}>
        {title}
      </li>
      <button onClick={completeHandler} className="check-button">
        {todo.completed ? (
          <i className="fas fa-redo"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </button>
      <button onClick={editHandler} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={deleteHandler} className="remove-button">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
