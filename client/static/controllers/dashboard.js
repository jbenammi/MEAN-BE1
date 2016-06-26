myApp.controller('dashboardsController', function(userFactory, pollFactory, $location, $routeParams){
	var self = this;
	self.user_session = {}
	self.chkuser = {};
	self.polls = []
	self.newPoll = {};
	
	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	pollFactory.showAll(function(factoryPolls){
		self.polls = factoryPolls;
	})

	self.create = function(){
		self.newPoll._user = self.user_session._id
		pollFactory.create(self.newPoll, function(){
			$location.url('/dashboard')
		})
		self.newPoll = {};
	}

	self.showPoll = function(id){
		pollFactory.showPoll(id, function(){
			$location.url('/poll/' + id)
		})
	}

	self.delete = function(id, callback){
		var poll_id = {_id: id}
		pollFactory.delete(poll_id, function(){
			pollFactory.showAll(function(factoryPolls){
				self.polls = factoryPolls;
			})			
		})
	}
})