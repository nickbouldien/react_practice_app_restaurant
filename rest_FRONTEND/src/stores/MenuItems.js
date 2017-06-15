import {EventEmitter} from 'events';
import menuService from '../services/MenuService';
// Import the Dispatcher so we can use it
import Dispatcher from '../dispatchers/Dispatcher'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.allCourses = [
      {
      id: 344434343,
      name: 'Alaskan Crab Legs',
      type: 'main'
      },
      {
        id: 33445534636,
        name: 'Steak',
        type: 'main'
      },
      {
        id: 12345534636,
        name: 'Macaroni and Cheese',
        type: 'side'
      },
      {
        id: 12345538927,
        name: 'Baked Potato',
        type: 'side'
      }
    ]
    //this.sideCourses = []
  }

  getAllCourses() {
    // if(this.allCourses.length === 0){
    //   menuService.getMenuItems();
    // }
    return this.allCourses;
  }

  // getAllSideCourses() {
  //   if(this.sideCourses.length === 0){
  //     menuService.getMenuItems();
  //   }
  //   return this.sideCourses;
  // }

  addMainCourse(course) {
    this.allCourses.push({
      // id: new Date().valueOf(),
      courseName: course.courseName,
      type: course.type,
      cost: course.cost,
      description: course.description
    })
    this.emit('change');
  }
  //
  // addMainCourses(items){
  //   this.mainCourses = items
  //   this.emit('change')
  // }

  deleteMainCourse(id) {
    // delete the main course item
    this.mainCourses = this.mainCourses.filter(function(courses){
      return courses.id !== id
    })
    this.emit('change')
  }

handleActions(action){
  switch(action.type) {
    case("CREATE_MAIN_COURSE"): {
      this.addMainCourse(action.course)
      break
    }
    case("DELETE_MAIN_COURSE"):{
      this.deleteMainCourse(action.id)
      break
    }
    case("MENU_ITEMS_FETCHED"):{
      this.addMainCourses(action.items)
      break
    }
    default: {}
  }
}
}
const menuItems = new MenuItems();

Dispatcher.register(menuItems.handleActions.bind(menuItems))
//window.dispacher
export default menuItems
