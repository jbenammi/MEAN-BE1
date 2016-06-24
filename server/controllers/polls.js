var Poll = mongoose.model('polls');
var User = mongoose.model('users');
var Option = mongoose.model('options');

module.exports = {
	//This function will create a new poll and imediately embed all the options associated with that poll.
	create: function(request, response){
		console.log(request.body);
		var pollInfo = {question: request.body.question, _user: request.body._user}
		var newPoll = new Poll(pollInfo)
		newPoll.save(function(err){
			console.log(newPoll);
			if(err){
				response.json({errors: err});
			}
			else{
					var optInfo1 = request.body.option_1
					var newOpt1 = new Option(optInfo1);
					newOpt1.save(function(err){
						if(err){
							console.log(err)
						}
					})
					newPoll._options.push(newOpt1._id);
					newPoll.save(function(err){
						if(err){
							console.log(err)
						}
					})
					var optInfo2 = request.body.option_2
					var newOpt2 = new Option(optInfo2);
					newOpt2.save(function(err){
						if(err){
							console.log(err)
						}
					})
					newPoll._options.push(newOpt2._id);
					newPoll.save(function(err){
						if(err){
							console.log(err)
						}
					})
					var optInfo3 = request.body.option_3
					var newOpt3 = new Option(optInfo1);
					newOpt3.save(function(err){
						if(err){
							console.log(err)
						}
					})
					newPoll._options.push(newOpt3._id);
					newPoll.save(function(err){
						if(err){
							console.log(err)
						}
					})
					var optInfo4 = request.body.option_4
					var newOpt4 = new Option(optInfo4);
					newOpt4.save(function(err){
						if(err){
							console.log(err)
						}
					})
					newPoll._options.push(newOpt4._id);
					newPoll.save(function(err){
						if(err){
							console.log(err)
						}
					})	
					console.log('after pushes', newPoll)														

				User.findOne({_id: request.body._user}, function(err, user){
					if(err){
						response.json({errors: err});
					}
					else{
						user._polls.push(newPoll._id);
						user.save(function(err){
							if (err) {
								response.json({errors: err});
							}
							else{
								response.json({success: true});
							}
						})
					}
				})
			}
		})
	},
	// This function will find all polls and poplulate the coresponding users associated with them and return the response
	showAll: function(request, response){
		Poll.find({}).populate('_user').exec(function(err, polls){
			if(err){
				response.json({errors: err});
			}
			else{
				response.json(polls);
			}
		})
	},
	// This function will find one poll by id and poplulate the coresponding user associated with it and return the response
	showOne: function(request, response){
		Poll.findOne({_id: request.params.id}).populate('_user _options').exec(function(err, poll){
			if(err){
				response.json({errors: err});
			}
			else{
				response.json(poll);
			}
		})
	},

	delete: function(request, response){
		Poll.remove({_id: request.body._id}, function(err){
			if (err) {
				response.json({errors: err});
			}
			else{
				response.json({success: true});
			}
		})
	}

}