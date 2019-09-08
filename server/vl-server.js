const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var configs = require('./app/configs/configs.js');
var Routes = require('./app/routes/routes.js');
var Apis = require('./app/routes/apis.js');

mongoose.connect(configs.mongodb_url + configs.database)
    .then(() =>  console.log('MongoDB connection succesful')).catch((err) => console.error(err));

var port = configs.port || 1338;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors({
	origin: 'http://localhost:4200'	
}));

var session = require('express-session');
app.use(session({
    resave: 'virtual-lover',
    saveUninitialized: 'virtual-lover',
    secret: 'virtual-lover-2019'
}));
/*
require('./app/configs/routes.js')(app);

app.use(express.static("public"));

var path = require('path');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
;
*/
//view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use('/', Routes); 
app.use('/api', Apis); 

app.listen(port, function () {
    console.log("Server is running in port: " + port);
});