import {processFetchedMenuItems} from '../actions/MenuItemActions';


class MenuService {
  getMenuItems(){
    setTimeout(function(){
      processFetchedMenuItems( [
        {
          id: 132232323,
          name: 'Cesar Salad',
          type: 'main'
        },
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
        },
        {
          id: 7081723434,
          name: "French Fries",
          type: 'side'
        }
      ])
    }, 1000)
  }
}
const menuService = new MenuService()
export default menuService


//
// processFetchedSides([
//       {
//         id: 12341234123,
//         name: "Macaroni and Cheese"
//       },
//       {
//         id: 51234234971,
//         name: "Baked Potato"
//       },
//       {
//         id: 7081723434,
//         name: "French Fries"
//       }
//     ])
