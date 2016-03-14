var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
//var routes = require('./routes/index');
//var client= require('./routes/client');
var app = express();
//var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.get('/users', function (req, res) {
    
	var options = {
		    host: 'localhost',
		    port: 3000,
		    path: '/users',
		    method: 'GET',	 
	};
    // HTTP GET request
    var reqGet = http.request(options, function(response) {
        response.on('data', function(data) {         	
        	var user = JSON.parse(data);
        	res.render('users', { data: user });                        
        });
    });
    reqGet.end();    
    reqGet.on('error', function(e) {
        console.error(e);
    });
});


app.get('/users/delete/:id', function (req, res) {
    
	var id = req.params.id;
	var options = {
		    host: 'localhost',
		    port: 3000,
		    path: '/users/'+id,
		    method: 'DELETE',	 
	};
    // HTTP GET request
    var reqGet = http.request(options, function(response) {
        response.on('data', function(data) {         	
        	//var user = JSON.parse(data);
        	//res.render('try', { data: user });  
        	res.redirect('/users');
        });
    });
    reqGet.end();    
    reqGet.on('error', function(e) {
        console.error(e);
    });
});


app.get('/users/add',function (req, res){
	res.render('add_users');
});


app.post('/users/add', function (req, res) {
	var post_data = {
	    	"firstname": req.body.firstname,
			"lastname": req.body.lastname,
			"email": req.body.email,
			"id": req.body.id	
	    };
	console.log(post_data);
	//console.log(post_data.firstname + " " +post_data.lastname + " " + post_data.email + " "+ post_data.id);
	var body = JSON.stringify(post_data);
	//var body = JSON.parse(post_data);
	
	var options = {
		    host: 'localhost',
		    port: 3000,
		    path: '/users',
		    method: 'POST',			
		    headers: {
		        "content-type": "application/json",
		        },		  
		    body: body
	};
	
	
	
    var reqGet = http.request(options, function(response) {
    	
    	response.on('data', function(data) {         	
        	var user = JSON.parse(data);
        	res.render('try', { data: user });
        	//res.redirect('/users');
        });
    });

    reqGet.on('error', function(e) {
        console.error(e);
    });
});



module.exports = app;
