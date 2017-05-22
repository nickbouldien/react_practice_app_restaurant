import {processFetchedMenuItems} from '../actions/MenuItemActions';


class MenuService {
  getMenuItems(){
    setTimeout(function(){
      processFetchedMenuItems( [
      {
        id: 132232323,
        name: 'Cesar Salad'
      },
      {
        id: 344434343,
        name: 'Alaskan Crab Legs'
      }
    ])
    }, 2000)
  }
}
const menuService = new MenuService()
export default menuService
