var UsersSchema = new mongoose.Schema({
	name: {type: String, required: true},
	_polls: [{type: mongoose.Schema.Types.ObjectId, ref: 'polls'}]
}, {timestamps: true});

var PollsSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 8},
	_options: [{type: mongoose.Schema.Types.ObjectId, ref: 'options'}],
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
}, {timestamps: true});

var OptionsSchema = new mongoose.Schema({
	q_option: {type: String, required: true, minlength: 3},
	vote: {type: Number}
}, {timestamps: true});

mongoose.model('users', UsersSchema);
mongoose.model('polls', PollsSchema);
mongoose.model('options', OptionsSchema);
