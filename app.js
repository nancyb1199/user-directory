const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const Mustache = require('mustache')
const data = require('./data.js')

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/users/', function(req, res){
    res.render('users',data)
});



app.listen(3000, function () {
  console.log('Successfully started express application!');
});
