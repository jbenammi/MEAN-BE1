var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
var options = require('../controllers/options.js');


module.exports = function(){

	app.post('/users', function(request, response){
		users.loginreg(request, response);
	});

	app.get('/users/:id', function(request, response){
		users.getOne(request, response);
	})

	app.get('/polls', function(request, response){
		polls.showAll(request, response);
	});

	app.post('/polls', function(request, response){
		polls.create(request, response);
	});

	app.get('/polls/:id', function(request, response){
		polls.showOne(request, response);
	});

	app.delete('/polls/:id', function(request, response){
		polls.delete(request, response);
	});

	app.post('/votes/:id', function(request, response){
		options.vote(request, response);
	});	

}