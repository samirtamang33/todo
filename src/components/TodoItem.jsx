function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleTodo(todo.id)}
      >
        <strong>{todo.text}</strong>
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
