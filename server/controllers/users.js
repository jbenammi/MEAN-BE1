var User = mongoose.model('users');

module.exports = {
	loginreg: function(request, response){
		User.findOne({name: request.body.name}, function(err, fromDB){
			if(err){
				response.json({errors: err});
			}
			else if(!fromDB){
				var userInfo = request.body;
				userInfo._polls = [];
				var newUser = new User(userInfo);
				newUser.save(function(err){
					if(err){
						response.json({errors: err});
					}
					else{
						var logged_user = {name: newUser.name, _id: newUser._id, success: true};
						console.log('made new user', logged_user);
						response.json(logged_user);
					}
				})
			}
			else{
				var logged_user = {name: fromDB.name, _id: fromDB._id, success: true};
				console.log('logging in user', logged_user);
				response.json(logged_user);			}
		})
	}
}