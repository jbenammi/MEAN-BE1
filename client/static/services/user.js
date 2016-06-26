myApp.factory('userFactory', function($http){
	var factory = {};
	var user_session = {};


	factory.chk_session = function(callback){
		callback(user_session);
	}

	factory.login = function(user, callback){
		$http.post('/users', user).success(function(fromDB){
			if(fromDB.success){
				user_session = fromDB
				callback(user_session);
			}
			else if(fromDB.errors){
				console.log(fromDB.errors);
			}
		})
	}

	factory.logout = function(callback){
		user_session = {}
		callback();
	}

	return factory;
});