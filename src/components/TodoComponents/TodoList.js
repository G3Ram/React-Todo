// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo";

function TodoList(props) {
  return (
    <div className="todo-List">
      {props.todoList.map(todoItem => (
        <Todo
          key={todoItem.id}
          todo={todoItem}
          handleChange={props.handleChange}
        />
      ))}
    </div>
  );
}

export default TodoList;
