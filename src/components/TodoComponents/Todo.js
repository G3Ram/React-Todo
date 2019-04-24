import React from "react";

function Todo(props) {
  return (
    <div className="todo todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
