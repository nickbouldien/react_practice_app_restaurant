import React, { Component } from 'react';
import menuItems from '../stores/MenuItems';
import {createMainCourse} from '../actions/MenuItemActions';
import {Link} from 'react-router-dom';


class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCourseName: 'Course Name',
      mainCourses: menuItems.getAllMainCourses()
     }
  }

  handleNewCourseNameChange(event){
    this.setState({newCourseName: event.target.value})
  }

  handleAddCourse(){
    createMainCourse(this.state.newCourseName)
  }

  componentWillMount(){
    menuItems.on('change', function() {
      this.setState({
        mainCourses: menuItems.getAllMainCourses()
      })
    }.bind(this))
  }

  render() {
    //console.log(this.state.mainCourses);
    let list = this.state.mainCourses.map(function(dish) {
      // console.log(list);
      //console.log(dish.name);
      return (
      <li key={dish.id}>
        {dish.name}
      </li>
    )
    }
  )
    return (
      <div>
        <h3>Main Courses</h3>
        <ul>
          {list}
        </ul>
        <h5>Add an item</h5>
        <label>Main Course Name</label>
        <br />
        <input value={this.state.newCourseName} onChange={this.handleNewCourseNameChange.bind(this)} />
        <br />
        <button onClick={this.handleAddCourse.bind(this)}>Add Course</button>
        <br />
        <Link to="/">Back Home</Link>
      </div>
    )
  }
}

export default Menu;
