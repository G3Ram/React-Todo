import React from "react";

function Todo(props) {
  return (
    <div className="todo todo-item">
      <input type="checkbox" />
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
