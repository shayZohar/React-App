const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//this is like the line above - destractor
const { Schema } = mongoose;

//schema to let mongoose know what property userSchema has
const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 },
});

//model class of user using schema(is collection not exists'it will creat it, otherwise, wont do anything)
mongoose.model('users', userSchema);
