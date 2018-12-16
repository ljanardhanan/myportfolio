//importing modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

//routing 
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/sport_session_mgt');

//on connection to mongodb
mongoose.connection.on('connected',()=>{
    console.log('Connected to DB mongodb @ 27017');
});

//Error while connecting to mongodb
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('Error while connecting to DB mongodb @ 27017 '+err);
    }
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req, res)=>{
    res.send('welcome Lak!');
});

//listen on port
app.listen(port,()=>{
    console.log('listening on port '+port);
});