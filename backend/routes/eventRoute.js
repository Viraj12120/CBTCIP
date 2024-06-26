const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Create a new event
router.post("/", async (req, res) => {
	try {
		const newEvent = new Event(req.body);
		const event = await newEvent.save();
		res.status(201).json(event);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Get all events
router.get("/", async (req, res) => {
	try {
		const events = await Event.find();
		res.json(events);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
