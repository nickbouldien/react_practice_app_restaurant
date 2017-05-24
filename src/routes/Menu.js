import React, { Component } from 'react';
import menuItems from '../stores/MenuItems';
import {createMainCourse, processFetchedMenuItems, processFetchedSides} from '../actions/MenuItemActions';
import {Link} from 'react-router-dom';
import menuService from '../services/MenuService'

class Menu extends Component {
  constructor(props) {
    super(props)
    // take state out and
    this.state = {
      newCourseName: 'Course Name',
      mainCourses: menuItems.getAllMainCourses(),
      sides: menuItems.getAllSides()
     }
  }

  handleNewCourseNameChange(event){
    // move out! don't change the state in menu.js
    this.setState({newCourseName: event.target.value})
  }

  handleAddCourse(){

    createMainCourse(this.state.newCourseName)
    // validate
  }

  handleUpdate(){
    this.setState({
      mainCourses: menuItems.getAllMainCourses(),
      sides: menuItems.getAllSides()
    }) //
  }

  componentWillMount(){
    menuItems.on('change', this.handleUpdate.bind(this))
    // processFetchedSides
    // processFetchedMenuItems
  }

  render() {
    //console.log(this.state.mainCourses);
    let list = this.state.mainCourses.map(function(dish) {
      return (
      <li key={dish.id}>
        {dish.name}
      </li>
      )
    }
  )
  let sideList = this.state.sides.map(function(side) {
    // console.log(list);
    console.log(side.name);
    return (
        <li key={side.id}>
          {side.name}
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
        <h3>Sides</h3>
        <ul>
          {sideList}
        </ul>

        <h5>Add an item</h5>
        <h6>Main Course Name</h6>
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
