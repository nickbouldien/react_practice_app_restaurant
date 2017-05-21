import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {deleteMainCourse, addMainCourse} from './actions/MenuItemActions'
                    //should be createMainCourse
import Menu from './routes/Menu';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
          </div>

          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />


        </div>
    </Router>
    );
  }
}

export default App;
