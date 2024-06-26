import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import EventCard from "../components/EventCard";

const EventCardPage = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Simulate fetching data
		setEvents(eventData);
	}, []);

	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
};

export default EventCardPage;
