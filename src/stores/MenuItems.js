import {EventEmitter} from 'events';
import menuService from '../services/MenuService';
// Import the Dispatcher so we can use it
import Dispatcher from '../dispatchers/Dispatcher'

class MenuItems extends EventEmitter{
  constructor(){
    super()
    this.mainCourses = []
    this.sides = []
    this.errors = {}
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors = {}
    this.validateLength('name') // no id, right??
  }

  validateLength(fieldName){
    if(this.mainCourses[fieldName] === ''){
      this.addError(fieldName, 'is too long for the menu, try again')
    }
  }

  getAllMainCourses() {
    if(this.mainCourses.length === 0){
      menuService.getMenuItems();
    }
    return this.mainCourses;
  }

  getAllSides() {
    if(this.sides.length === 0){
      menuService.getMenuItems();
    }
    return this.sides;
  }

  addMainCourse(name) {
    this.mainCourses.push({
      id: new Date().valueOf(),
      name: name
    })
    this.emit('change');
  }

  addMainCourses(items){
    this.mainCourses = items
    this.emit('change')
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
