var Option = mongoose.model('options');

module.exports = {
	vote: function(request, response){
		Option.findOne({_id: request.params.id}, function(err, option){
			if(err){
				response.json({errors: err});
			}
			else{
				option.vote ++
				option.save(function(err){
					if(err){
						response.json({errors: err});
					}
					else{
						response.json({success: true});
					}		
				})
			}
		})
	}
}