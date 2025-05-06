import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Deploy to Netlify", completed: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <h1>TODO</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
