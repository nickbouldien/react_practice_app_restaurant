import React, { Component } from 'react';
import menuItems from '../stores/MenuItems';
import {createMainCourse, deleteMainCourse} from '../actions/actions';
import {Link} from 'react-router-dom';
//import MenuService from '../services/MenuService'

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
        // sideCourses: menuItems.getAllSideCourses()
      })
    }.bind(this))
  }

  handleDeleteCourse(main){
    //console.log('delete', main.id);
    deleteMainCourse(main.id)
  }

  render() {

    let mains = this.state.mainCourses.filter(function(main){
      return main.type==='main'
    })
    let mainC = mains.map((main) => {
      return (
      <li key={main.id}>
        {main.name}:
        {/* {console.log(this)} */}

        <button
          onClick={this.handleDeleteCourse.bind(this, main) }
          id={main.id}>Delete</button>
      </li>
      )
    })

    let sides = this.state.mainCourses.filter(function(side){
      return side.type==='side'
    })
    let sideList = sides.map(function(side) {
      return (
      <li key={side.id}>
        {side.name}
      </li>
      )
    })
    return (
      <div className="nick">
        <h3>Main Courses</h3>
        <ul>
          {mainC}
        </ul>
        <hr />
        <h3>Sides</h3>
        <ul>
          {sideList}
        </ul>
        <hr />
        <h4>Add an item</h4>
        <label>Main Course Name</label>
        <br />
        <input
          value={this.state.newCourseName} onChange={this.handleNewCourseNameChange.bind(this)}
        />
        <br />
        <button onClick={this.handleAddCourse.bind(this)}>Add Course</button>
        <br />
        <br />
        <Link to="/">Back Home</Link>
      </div>
    )
  }
}

export default Menu;




// let sideList = this.state.sideCourses.map(function(side) {
//   return (
//   <li key={side.id}>
//     {side.name}
//   </li>
//   )
// })
