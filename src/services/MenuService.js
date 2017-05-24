import {processFetchedMenuItems, processFetchedSides} from '../actions/MenuItemActions';


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
    processFetchedSides([
      {
        id: 12341234123,
        name: "Macaroni and Cheese"
      },
      {
        id: 51234234971,
        name: "Baked Potato"
      },
      {
        id: 7081723434,
        name: "French Fries"
      }
    ])

    }, 1000)
  }
}
const menuService = new MenuService()
export default menuService
