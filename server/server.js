const express = require('express');
const api= require('./src/routes/api');
const cors = require('cors');
var bodyparser = require('body-parser');  


var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use('/api',api);

app.listen(3113, function(){
    console.log('listening to port 3113');
})
