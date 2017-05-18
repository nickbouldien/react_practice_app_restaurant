import {EventEmitter} from 'events'

// Import the Dispatcher so we can use it
import Dispatcher from '../Dispatcher'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.mainCourses = [
      {
        id: 132232323,
        name: 'Cesar Salad'
      },
      {
        id: 344434343,
        name: 'Alaskan Crab Legs'
      }
    ]
  }

  getAllMainCourses() {
    return this.mainCourses;
  }

  addMainCourse(name) {
    this.mainCourses.push({
      id: new Date().valueOf(),
      name: name
    })
    this.emit('change');
  }

  deleteMainCourse(id) {
    // delete the main course item
  }

handleActions(action){
  switch(action.type) {
    case("CREATE_MAIN_COURSE"): {
      this.addMainCourse(action.name)
      break
    }
    case("DELETE_MAIN_COURSE"):{
      this.deleteMainCourse(action.id)
    }
    default: {}
  }
}
}
const menuItems = new MenuItems();

Dispatcher.register(menuItems.handleActions.bind(menuItems))

export default menuItems
