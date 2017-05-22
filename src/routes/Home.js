import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="App">
          <h1>Welcome to the cafe </h1>
            <Link to="/menu">View menu</Link>
        </div>
    );
  }
}

export default Home;
