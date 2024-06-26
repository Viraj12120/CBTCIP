const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
	eventId: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	city: { type: String },
	Fees: { type: String },
});

module.exports = mongoose.model("Guest", GuestSchema);
