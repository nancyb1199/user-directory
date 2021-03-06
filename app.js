const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const Mustache = require('mustache')
const data = require('./data.js')

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/public'));

app.get('/users/', function(req, res){
    res.render('users',data)
});

app.get('/users/:name', function (req, res) {
  res.send();
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
