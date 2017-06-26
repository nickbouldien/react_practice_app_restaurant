import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PositiveCounter from './PositiveCounter';

class Home extends Component {
  render() {
    return (
      // <Link page="http://www.facebook.com">Facebook</Link>

        <div className="Appstuff">

          <PositiveCounter />

          <h1>Welcome to the cafe </h1>
          <h4>About us: </h4>
          <p>Stuff about the restaurant/cafe goes here</p>
          <Link to="/menu">View menu</Link>
          <br />
          <Link to="/about">View Staff</Link>
          <br />
          <Link to="/add-course">Add course (//going to be protected)</Link>
          <br />
          <Link to="/add-staff">Add staff member (//going to be protected)</Link>

        </div>
    );
  }
}

export default Home;
