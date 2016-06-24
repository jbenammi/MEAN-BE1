myApp.controller('usersController', function(userFactory, $location){
	var self = this;
	self.user_session = {}
	self.chkuser = {};
	
	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	self.login = function(){
		console.log(self.chkuser);
		userFactory.login(self.chkuser, function(factoryUser_Session){
			self.user_session = factoryUser_Session
			$location.url('/dashboard');
		});
	}

	self.logout = function(){
		userFactory.logout(function(){
			$location.url('/');
		});
	}

});