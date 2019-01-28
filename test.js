const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

// Start the app
const env = Object.assign({}, process.env, {PORT: 5000});
const child = spawn('node', ['index.js'], {env});

test('responds to requests', (t) => {
  t.plan(4);

  // Wait until the server is ready
  child.stdout.on('data', _ => {
    // Make a request to our app
    request('http://127.0.0.1:5000', (error, response, body) => {
      // stop the server
      child.kill();

      // No error
      t.false(error);
      // Successful response
      t.equal(response.statusCode, 200);
      // Assert content checks
      t.notEqual(body.indexOf("<title>Movie Info App</title>"), -1);
      t.notEqual(body.indexOf("Built with Node on Heroku"), -1);
    });
  });
});


//Origional code 




 //app.set ('port', (process.env.PORT || 5000));
//app.use(express.static(path.join(__dirname, '/public')));

// var fs = require('fs');
// var path = require('path');
// var http = require('http');



// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/', express.static(path.join(__dirname, 'public'));

// app.get('/favorites', function(req, res){
//   var data = fs.readFileSync('./data.json');
//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// };

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

app.list(3000, function(){
  console.log("Listening on port 3000");
});