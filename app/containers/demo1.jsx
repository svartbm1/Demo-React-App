import React, { Component } from 'react';
import moment from 'moment';

export default class Demo extends Component {

  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
