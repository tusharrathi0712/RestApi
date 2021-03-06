var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var request = require('request');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : false
}));

//GET ALL USERS
app.get('/users', function(req, res) {

	var options = {
		host : 'localhost',
		port : 3000,
		path : '/users',
		method : 'GET',
	};
	// HTTP GET request
	var reqGet = http.request(options, function(response) {
		response.on('data', function(data) {
			var user = JSON.parse(data);
			res.render('users', {
				data : user
			});
		});
	});
	reqGet.end();
	reqGet.on('error', function(e) {
		console.error(e);
	});
});

//DELETE USER BY ID
app.get('/users/delete/:id', function(req, res) {

	var id = req.params.id;
	var options = {
		host : 'localhost',
		port : 3000,
		path : '/users/' + id,
		method : 'DELETE',
	};
	// HTTP GET request
	var reqGet = http.request(options, function(response) {
		response.on('data', function(data) {
			// var user = JSON.parse(data);
			// res.render('try', { data: user });
			res.redirect('/users');
		});
	});
	reqGet.end();
	reqGet.on('error', function(e) {
		console.error(e);
	});
});

//ADD USER PAGE
app.get('/users/add', function(req, res) {
	res.render('add_users');
});

//INSERTING NEW USER
app.post('/users/add', function(req, res) {
	var post_data = {
		firstname : req.body.firstname,
		lastname : req.body.lastname,
		email : req.body.email,
		id : req.body.id
	};

	var db = JSON.stringify(post_data);

	request.post({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users',
		body : db
	}, function(error, response, res_body) {
		console.log(res_body);
		// var user = JSON.parse(res_body);
		// res.render('try', { data: user });
		res.redirect('/users');
	});
});


//GET USER BY ID
app.get('/users/edit/:id', function(req, res) {

	var id = req.params.id;
	var options = {
		host : 'localhost',
		port : 3000,
		path : '/users/' + id,
		method : 'GET',
	};
	// HTTP GET request
	var reqGet = http.request(options, function(response) {
		response.on('data', function(data) {
			var user = JSON.parse(data);
			res.render('edit_users', {
				data : user
			});
		});
	});
	reqGet.end();
	reqGet.on('error', function(e) {
		console.error(e);
	});
});

//UPDATE USER
app.post('/users/edit', function(req, res) {
	var post_data = {
		firstname : req.body.firstname,
		lastname : req.body.lastname,
		email : req.body.email,
		id : req.body.id
	};

	var db = JSON.stringify(post_data);

	request.put({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users',
		body : db
	}, function(error, response, res_body) {
		// var user = JSON.parse(res_body);
		// res.render('try', { data: user });
		res.redirect('/users');
	});
});

module.exports = app;
