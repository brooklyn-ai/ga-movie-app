const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



// var path = require('path'),
//     express = require('express'),
//     bodyParser = require('body-parser');
    
// module.exports = function(app) {
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: false }));
//     app.use(bodyParser({
//         uploadDir:path.join(__dirname, 'public/upload/temp')
//     }));
//     return app;
// };





// Node.js Modules

// add HTTP module: transfer app data over HTTP
//var http = require('http');

//add node file system module
//var fs = require('fs');

//add node path (to file) module
//var path = require('path');



// Express app stuff
 // set the port and to heroku enviroment and sync (terminal - via Github  
 // repo:  git@github.com:brooklyn-ai/ga-movie-app.git )
 //  resolve to --> https://ga-movie-app.herokuapp.com
//app.set ('port', (process.env.PORT || 3000)); 

// use 'express' middleware function for assets 
//app.use(express.static(path.join(__dirname, '/public')));


// don't deal with nested URL objects --or turn to 'true' 
//app.use(bodyParser.urlencoded({ extended: true })); 


// parse application/json
//app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
//app.use(bodyParser.raw());
// parse text
//app.use(bodyParser.text());






// Express Routing!
// allow express to use/ serve static files  join webpath '/public' and filesystem path
//app.use('/', express.static(path.join(__dirname, 'public')));

  // app.use('/public', express.static(path.join(__dirname, 'public')))

// basic route
//app.get('/', function (req, res) {
 // res.send('Searching for a Movie?')
//})

// listen for this route
// app.get('/favorites', function(req, res){

//   //read / cache JSON data 
//   var data = fs.readFileSync('./data.json');  // replace with URL?
// // set the content type 
//   res.setHeader('Content-Type', 'application/json');
// // respond with this data in the conditon of /favorites
//   res.send(data);
// });


//match request for /favorites route
// app.get('favorites', function(req, res){
//   if(!req.body.name || !req.body.oid){
//     res.send("Error");
//     return
  
//   var data = JSON.parse(fs.readFileSync('./data.json'));
//   data.push(req.body);

//   fs.writeFile('./data.json', JSON.stringify(data));

//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// }});

// app.listen(3000, function(){
//   console.log("Listening on port 3000");
// });