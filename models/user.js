var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	user_id: Number,
	email: String,
	username: String,
	firstName: String,
	lastName: String,
	password: String,
	createdAt: Date
}),
User = mongoose.model('User', userSchema);

module.exports = User;