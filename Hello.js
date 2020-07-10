import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from './store/actions';

class Hello extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  createTodo = () => {
    this.props.addTodo(this.textInput.current.value);
  }

  render() {
    const name = this.props.name;
    const todos = this.props.todos.todos || [];
    console.log(todos);
    return (
      <div>
        <span> {name} </span>
        <input
          type="text"
          ref={this.textInput}
        />
        <button onClick={this.createTodo}>Add Todo</button>
        <br />
        <ul>
          {todos.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(Hello);
