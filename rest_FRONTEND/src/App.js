import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {deleteMainCourse, addMainCourse} from './actions/MenuItemActions'
                    //should be createMainCourse
import Menu from './routes/Menu';
import Home from './routes/Home';
import About from './routes/About';
import AddMenuItem from './routes/AddMenuItem';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="App-header">
          </div> */}

          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/about' component={About} />
          <Route exact path='/add-course' component={AddMenuItem} />

        </div>
    </Router>
    );
  }
}

export default App;
