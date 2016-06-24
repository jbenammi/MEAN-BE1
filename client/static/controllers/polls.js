myApp.controller('pollsController', function(userFactory, pollFactory, $location){
	var self = this;
	self.user_session = {}
	self.chkuser = {};
	self.poll = {}

	console.log('This is the poll id', self.poll_id);

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
			pollFactory.showOne(self.poll_id, function(factoryPoll){
				self.poll = factoryPoll;
			})
		})
	}