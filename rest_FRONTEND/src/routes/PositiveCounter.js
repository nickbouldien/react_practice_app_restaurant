import React, { Component } from 'react';

export default class PositiveCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment () {
    return this.setState({
      count: this.state.count + 1
    });
  }

  addMore () {
    return this.setState({
      count: this.state.count + 5
    });
  }

  decrement () {
    return this.setState({
      count: Math.max(0, this.state.count - 1)
    });
  }

  render() {
    return (
      <span>
        Value: {this.state.count}
        <button className="decrement" onClick={this.decrement}>&minus;</button>
        <button className="increment" onClick={this.increment}>+</button>
        <button className="addMore" onClick={this.addMore}>+++</button>
      </span>
    );
  }
}
