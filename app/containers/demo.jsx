import React, { Component } from 'react';
import moment from 'moment';

export default class Demo extends Component {

  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }
  get(){
  console.log("MOI")
  }
  render() {
    const time = this.provide_time();
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>{time}</h3>
        <button onClick={() => this.get()}>Demo button</button>
      </div>
    );
  }
}
