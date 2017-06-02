const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// const Team = require('./models').Team
// const Player = require('./models').Player
// const User = require('./models').User

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
