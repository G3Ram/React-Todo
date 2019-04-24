import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      todoItem: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      ...this.state.todoItems,
      todoItem: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      ...this.state.todoItems,
      todoItem: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
    const todoItemsArr = this.state.todoItems.slice();
    todoItemsArr.push(this.state.todoItem);
    this.setState({
      todoItems: todoItemsArr,
      todoItem: {
        task: "",
        id: Date.now(),
        completed: false
      }
    });
  };

  renderTodoForm() {
    return (
      <TodoForm
        value={this.state.todoItem.task}
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
        <div className="todoApp">
          <h2>Welcome to my Todo App!</h2>
          <TodoList todoList={this.state.todoItems} />
        </div>
        {this.renderTodoForm()}
      </div>
    );
  }
}

export default App;
