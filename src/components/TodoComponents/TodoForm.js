import React from "react";
import "./Todo.css";

function TodoForm(props) {
  console.log("------------in Todo Form -------------" + props);
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Enter your todo item here"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        required
        size="100"
        className="inputTodoDesc"
      />
      <button type="submit" className="addItemBtn" onClick={props.onClick}>
        Add an item
      </button>
    </form>
  );
}
export default TodoForm;
