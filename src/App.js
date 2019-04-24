import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    let count = 0;
    this.state = {
      todoItems: [],
      todoItem: {
        todoItemDescription: "",
        id: "",
        completed: false
      }
    };
  }

  handleChange = event => {
    console.log("Invoking handle change");
    this.setState({
      ...this.state.todoItems,
      todoItem: {
        todoItemDescription: event.target.value,
        id: "",
        completed: false
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.count++;
    console.log("Invoking handle submit");
    this.setState({
      ...this.state.todoItems,
      todoItem: {
        todoItemDescription: event.target.value,
        id: this.count,
        completed: false
      }
    });
    const todoItemsArr = this.state.todoItems.slice();
    todoItemsArr.push(this.state.todoItem);
    console.log(
      "--------------->>------- todoItem is " +
        this.state.todoItem.todoItemDescription
    );
    console.log(
      "--------------->>------- todoItem is " + this.state.todoItem.id
    );
    console.log(
      "--------------->>------- todoItem is " + this.state.todoItem.completed
    );
    console.log("--------------->>------- todoItem is " + todoItemsArr.length);
    this.setState({
      todoItems: todoItemsArr,
      todoItem: {
        todoItemDescription: "",
        id: "",
        completed: false
      }
    });
    console.log("-------------------------->" + this.state.todoItems.length);
  };

  renderTodoForm() {
    return (
      <TodoForm
        value={this.state.todoItem.todoDescription}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClick={this.handleSubmit}
        name="todoItemDescription"
      />
    );
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList todoList={this.state.todoItems} />
        {this.renderTodoForm()}
      </div>
    );
  }
}

export default App;
