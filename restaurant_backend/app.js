const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Menu = require('./models').Menu
const Staff = require('./models').Staff

var cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.post('/test', function(request, response){
  response.json({params: request.body})
})

app.post('/add-course', function(request, response){
  Menu.create(
    {
      courseName: request.body.course.courseName,
      type: request.body.course.type,
      description: request.body.course.description,
      cost: request.body.course.cost
    }
  ).then((course)=>{
    response.json({
      message: 'success',
      course: course
    })
  }).catch((error)=>{
    response.status(400)
    response.json({
      message: "Unable to create Course",
      errors: error.errors
    })
  })
})

app.post('/add-staff', function(request, response){
  console.log(request.body);
  Staff.create(
    {
      firstName: request.body.staffMember.firstName,
      lastName: request.body.staffMember.lastName,
      position: request.body.staffMember.position
    }
  ).then((staff)=>{
    response.json({
      message: 'success',
      staff: staff
    })
  }).catch((error)=>{
    response.status(400)
    response.json({
      message: "Unable to create Course",
      errors: error.errors
    })
  })
})

app.get('/players', function (request, response) {
  Player.findAll().then(function(players){
    response.status(200)
    response.json({message: "success", players: players})
  })
  // response.json({message: 'API Example App'})
});


// ???
// app.get('/team:id', function (request, response) {
//   Player.findAll().then(function(players){
//     // put in where statement to return only form certain team
//     response.status(200)
//     response.json({message: "success", players: players})
//
//   })
//   // response.json({message: 'API Example App'})
// });

// process.env.PORT || 4000
app.listen(4000, function () {
 console.log('Todo Server listening on port 4000!');
});
