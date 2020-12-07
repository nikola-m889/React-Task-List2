import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getFromStorage();
  }, []);

  useEffect(() => {
    saveToStorage();
  }, [todos]);

  const getFromStorage = () => {
    const todoStorage = JSON.parse(localStorage.getItem("todos"));
    if (todoStorage) setTodos(todoStorage);
  };

  const saveToStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const editHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    const selectedItem = todos.find((item) => item.id === id);
    setTodoInput(selectedItem.text);
  };

  const clearList = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task List</h1>
      </header>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        editHandler={editHandler}
        clearList={clearList}
      />
    </div>
  );
}

export default App;
