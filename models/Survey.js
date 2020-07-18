const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

//schema to let mongoose know what property userSchema has
const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	// we set relationship that every survey belong to specific User, the ref is telling mongoose that '_user' belong to collection called 'User'
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date,
});

//model class of survey using schema(is collection not exists,it will creat it, otherwise, wont do anything)
mongoose.model('surveys', surveySchema);
