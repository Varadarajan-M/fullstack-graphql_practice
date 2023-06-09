const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true },
	phone: {
		type: String,
		required: true,
	},
});

const Client = mongoose.model('Client', schema);

module.exports = Client;
