import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="Appstuff">
          <h1>A bit about us: </h1>
          <h2>Staff</h2>

          <h4>Brad Thomas</h4>
          <ul>
            <li>Owner/CEO</li>
            <li>MBA Harvard University </li>
          </ul>

          <h4>Chef Tony</h4>
          <ul>
            <li>Lead chef</li>
            <li>Graduate of New York Culinary Institute</li>
          </ul>

          <h4>Chef Victor</h4>
          <ul>
            <li>Sioux Chef</li>
            <li>Graduate of New York Culinary Institute</li>
          </ul>

          <h4>Ana Rodriguez</h4>
          <ul>
            <li>Head of Marketing and Operations</li>
            <li>MBA University of New York</li>
          </ul>

          <Link to="/">Home</Link>
        </div>
    );
  }
}

export default Home;
