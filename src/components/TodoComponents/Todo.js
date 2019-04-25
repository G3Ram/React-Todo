import React from "react";
import "./Todo.css";

function Todo(props) {
  const completedStyle = {
    fontStyle: "italics",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  const displayNone = {
    display: "none"
  };
  return (
    <div
      className="todo todo-item"
      style={props.todo.task === "" ? displayNone : null}
    >
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
