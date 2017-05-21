import React, { Component } from 'react';
import menuItems from '../stores/MenuItems';
import {createMainCourse} from '../actions/MenuItemActions'

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
    let list = this.state.mainCourses.map((dish) => {
      <li key={dish.id}>
        {dish.name}
      </li>
    })
    return (
      <div>
        <h3>Main Courses</h3>
        <h5>Add an item</h5>
        <label>Main Course Name</label>
        <input value={this.state.newCourseName} onChange={this.handleNewCourseNameChange.bind(this)} />

        <button onClick={this.handleAddCourse.bind(this)}>Add Course</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Menu;
