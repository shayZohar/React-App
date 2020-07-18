const mongoose = require('mongoose');
const { stripePublishableKey } = require('../config/prod');
const { Schema } = mongoose;

//schema to let mongoose know what property userSchema has
const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false },
});

//export to another model
module.exports =recipientSchema;
