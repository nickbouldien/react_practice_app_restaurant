import Dispatcher from '../dispatchers/Dispatcher';

export function createMainCourse(name){
  Dispatcher.dispatch({
    type: "CREATE_MAIN_COURSE",
    name: name
  })
}

export function deleteMainCourse(id){
  Dispatcher.dispatch({
    type: "DELETE_MAIN_COURSE",
    id: id
  })
}

export function processFetchedMenuItems(menuItems){
  Dispatcher.dispatch({
    type: "MENU_ITEMS_FETCHED",
    items: menuItems
  }
  )
}
