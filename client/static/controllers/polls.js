myApp.controller('pollsController', function(userFactory, pollFactory, $location, $routeParams){
	var self = this;
	self.user_session = {}
	self.chkuser = {};
	self.poll = {}
	self.poll_id = $routeParams;

	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	pollFactory.showOne(function(factoryPoll){
		self.poll = factoryPoll;
	})

	self.vote = function(option_id){
		pollFactory.vote(option_id, function(){
			pollFactory.showOne(function(factoryPoll){
				self.poll = factoryPoll;
			})
		})
	}
})