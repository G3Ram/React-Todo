import React from "react";

function Todo(props) {
  const completedStyle = {
    fontStyle: "italics",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p style={props.todo.completed ? completedStyle : null}>
        {props.todo.task}
      </p>
    </div>
  );
}

export default Todo;
