import Dispatcher from '../dispatchers/Dispatcher';

// export function createMainCourse(course){
//   console.log(course);
//   Dispatcher.dispatch({
//     type: "CREATE_MAIN_COURSE",
//     course: course
//   })
// }

export function createMainCourse(course){
  // set up the headers and request
  // let currentUser = userStore.getUser()
  // if(currentUser){
  //   attributes.authToken = currentUser.authToken
  // }
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(course)
  }
  // send state to the backend server
  fetch("http://localhost:4000/add-course", params).then(function(response){
    // if post is successful update the message to be successful
    // and update the state to equal what we get back from the server
    console.log(response);
    if(response.status === 200){
      response.json().then(function(body){
        // send the cat to the store
        Dispatcher.dispatch({
          type: "CREATE_MAIN_COURSE",
          course: course
        })
      })
     }
    //  else if(response.status === 401) {
    //   catStore.updateMessage("You Need To Log In First")
    //   //TODO redirect to login
    // }
  }).catch(function(error){
    console.log('error');
    // catStore.updateMessage("There was an error: " + error)
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
