const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
	eventId: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	companyName: String,
	eventDate: { type: Date, required: true },
	venue: { type: String, required: true },
	startTime: { type: String, required: true },
	finishTime: { type: String, required: true },
	performer: String,
	package: String,
	numberOfGuests: Number,
	specialDayDetails: String,
});

module.exports = mongoose.model("Event", EventSchema);
