myApp.factory('pollFactory', function($http){
	var factory = {}
	var poll_id;

	factory.create = function(newpoll, callback){
		console.log(newpoll);
		newpoll.option_1.vote = 0
		newpoll.option_2.vote = 0
		newpoll.option_3.vote = 0
		newpoll.option_4.vote = 0
		console.log(newpoll);
		$http.post('/polls', newpoll).success(function(fromDB){
			if(fromDB.errors){
				console.log(fromDB.errors);
			}
			else{
				console.log(fromDB)
				callback()
			}
		})
	}

	factory.showAll = function(callback){
		$http.get('/polls').success(function(fromDB){
			if(fromDB.errors){
				console.log(fromDB.errors);
			}
			else{
				callback(fromDB);
			}
		})
	}

	factory.showOne = function(callback){
		$http.get('/polls/'+ poll_id).success(function(fromDB){
			if(fromDB.errors){
				console.log(fromDB.errors);
			}
			else{
				callback(fromDB);
			}
		})
	}

	factory.delete = function(id, callback){
		$http.delete('/polls', id).success(function(fromDB){
			if(fromDB.errors){
				console.log(fromDB.errors);
			}
			else{
				callback();
			}
		})		
	}

	factory.vote = function(option_id, callback){
		$http.post('/votes/' + option_id).success(function(fromDB){
			if(fromDB.errors){
				console.log(fromDB.errors);
			}
			else{
				callback();
			}
		})
	}

	factory.showPoll = function(p_id, callback){
		poll_id = p_id
		callback();
	}
	return factory
})