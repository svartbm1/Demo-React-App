import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import * as todoActions from 'actions/todo';

class Demo extends Component {

  componentWillMount() {
    this.props.getAllTodos();
  }

  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  showTodos() {
    const todoCount = this.props.todo.todos.length;
    const todos = this.props.todo.todos;
    if (todoCount > 0) {
      return todos.map(todo => {
        console.log(todo.title);
        return <p key={todo.id}>{todo.title}</p>;
      });
    }
    else {
      return (
        <p>No todos!</p>
      );
    }

  }

  get(){
    const clicks = 1;

    if (clicks == 1){
      console.log("You clicked the button.")
    } else {
      console.log("You clicked the button again!")
    }

  }

  render() {
    const time = this.provide_time();
    return (
      <div>
        <h3>{time}</h3>
        <button onClick={() => this.get()}>Click!</button>
        {this.showTodos()}
      </div>
    );
  }





}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  }
}

export default connect(mapStateToProps, {...todoActions})(Demo);
