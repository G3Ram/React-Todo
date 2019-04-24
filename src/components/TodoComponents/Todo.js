import React from "react";

function Todo(props) {
  console.log("-------in Todo --------" + props.todo);
  console.log("-------in Todo --------" + props.todo.todoItemDescription);

  return (
    <div>
      <p>{props.todo.todoItemDescription}</p>
    </div>
  );
}

export default Todo;
