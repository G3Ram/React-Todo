import React from "react";

function Todo(props) {
  console.log("-------in Todo --------" + props.todo.task);
  console.log("-------in Todo id is --------" + props.todo.id);

  return (
    <div className="todo todo-item">
      <input type="checkbox" />
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
