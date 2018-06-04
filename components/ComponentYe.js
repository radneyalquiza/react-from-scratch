import React, { Component } from 'react';

class ComponentYe extends Component {
  state = {
    count: 0,
  };

  onClick = () => {
    // 'this' is preserved
    console.log(this.state);
    this.setState(pstate => ({
      count: pstate.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Count is: {this.state.count}</h1>
        <button onClick={this.onClick}>Click me</button>
      </div>
    );
  }
}

export default ComponentYe;
