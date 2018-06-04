import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClass extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Ayyyy lemao',
  };

  state = {
    count: 0,
  };

  render() {
    return <h2>{this.props.title}: {this.state.count}</h2>;
  }
}

export default MyClass;
