import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <div className="todoForm">
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
        <button
          type="submit"
          className="addItemBtn"
          name={props.addBtnName}
          onClick={props.onClick}
        >
          Add an item
        </button>
        <button
          type="submit"
          className="addItemBtn"
          name={props.clearBtnName}
          onClick={props.onClick}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
}
export default TodoForm;
