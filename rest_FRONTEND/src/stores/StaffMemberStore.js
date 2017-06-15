import {EventEmitter} from 'events';
import menuService from '../services/MenuService';
// Import the Dispatcher so we can use it
import Dispatcher from '../dispatchers/Dispatcher'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.allStaff= [
      {
        firstName: "Andrew",
        lastName: 'Jackson',
        position: 'server'
      },
      {
        firstName: "Austin",
        lastName: 'Wilson',
        position: 'Bartender'
      },
      {
        firstName: "Anders",
        lastName: 'Holmvik',
        position: 'server'
      },
    ]
  }

  getAllCourses() {
    return this.allStaff;
  }

  addMainStaffMember(staffMember) {
    this.allCourses.push({
      firstName: staffMember.firstName,
      lastName: staffMember.lastName,
      position: staffMember.position
    })
    this.emit('add_staff_member');
  }

  //
  // deleteMainCourse(id) {
  //   // delete the main course item
  //   this.mainCourses = this.mainCourses.filter(function(courses){
  //     return courses.id !== id
  //   })
  //   this.emit('change')
  // }

handleActions(action){
  switch(action.type) {
    case("CREATE_STAFF_MEMBER"): {
      this.addMainStaffMember(action.staffMember)
      break
    }
    // case("DELETE_MAIN_COURSE"):{
    //   this.deleteMainCourse(action.id)
    //   break
    // }
    // case("MENU_ITEMS_FETCHED"):{
    //   this.addMainCourses(action.items)
    //   break
    // }
    default: {}
  }
}
}
const menuItems = new MenuItems();

Dispatcher.register(menuItems.handleActions.bind(menuItems))
//window.dispacher
export default menuItems
