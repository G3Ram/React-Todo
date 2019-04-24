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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleChange = event => {
    console.log("================" + event.target.name);
    this.setState({
      ...this.state.todoItems,
      todoItem: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  handleCheckBoxChange(id) {
    console.log("Handling checkbox change" + id);
    this.setState(prevState => {
      const updatedTodos = prevState.todoItems.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todoItems: updatedTodos,
        todoItem: {
          task: "",
          id: Date.now(),
          completed: false
        }
      };
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name);
    if (event.target.name === "add") {
      console.log("--------within add -----------");
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
    } else if (event.target.name === "clear") {
      console.log("--------within clear -----------");
      this.setState(prevState => {
        const incompleteTodos = prevState.todoItems.filter(todo => {
          return todo.completed === false;
        });
        return {
          todoItems: incompleteTodos,
          todoItem: {
            task: "",
            id: Date.now(),
            completed: false
          }
        };
      });
    }
  };

  renderTodoForm() {
    return (
      <TodoForm
        value={this.state.todoItem.task}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClick={this.handleSubmit}
        name="task"
        clearBtnName="clear"
        addBtnName="add"
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
          <TodoList
            todoList={this.state.todoItems}
            handleChange={this.handleCheckBoxChange}
          />
        </div>
        {this.renderTodoForm()}
      </div>
    );
  }
}

export default App;
