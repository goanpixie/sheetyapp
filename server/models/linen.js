var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BatchSchema = new mongoose.Schema({
	weight: Number, 
	status: String, 
	instructions: String, 
	recieved_by: String, 
	_items: [{type: Schema.Types.ObjectId, ref: "Item"}],
	_customer: {type: Schema.Types.ObjectId, ref: "Customers"}
}, {timestamps: true});

var ItemSchema = new mongoose.Schema({
	name: String,
	type: String,
	size: String,
	charge : String, 
	price: Number, 
	created_by: String
}, {timestamps: true});

var CustomerSchema = new mongoose.Schema({
	name: String,
	contact_name: String,
	phone: Number, 
	email: String, 
	address: String,
	weight_price: Number, 
	comments: String
}, {timestamps:true});

mongoose.model('Batches', UserSchema);
var Users = mongoose.model('Batches')
mongoose.model('Items', MessageSchema); 
var Messages = mongoose.model('Items')
mongoose.model('Customers', CommentSchema); 
var Comments = mongoose.model('Customers')
