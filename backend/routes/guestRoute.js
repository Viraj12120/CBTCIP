const express = require("express");
const router = express.Router();
const Guest = require("../models/Guest");

// Add a guest to an event
router.post("/:eventId", async (req, res) => {
	try {
		const newGuest = new Guest({ ...req.body, eventId: req.params.eventId });
		const guest = await newGuest.save();
		res.status(201).json(guest);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Remove a guest from an event
router.delete("/:eventId/:guestId", async (req, res) => {
	try {
		await Guest.findByIdAndDelete(req.params.guestId);
		res.json({ message: "Guest removed" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Get all guests for an event
router.get("/:eventId", async (req, res) => {
	try {
		const guests = await Guest.find({ eventId: req.params.eventId });
		res.json(guests);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
