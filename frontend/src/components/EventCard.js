import React, { useState } from "react";

const EventCard = ({ event }) => {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<div
			className={`relative p-6 m-4 bg-[#F8F6F6] rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:bg-opacity-50 transition-all duration-50 transform hover:scale-105 ${
				showPopup ? "h-80 w-80" : "h-60 w-60"
			}`}
			onMouseEnter={() => setShowPopup(true)}
			onMouseLeave={() => setShowPopup(false)}>
			<h2 className="text-xl font-semibold">{event.title}</h2>
			<p>{event.date}</p>
			<p>{event.time}</p>

			{showPopup && (
				<div className="absolute inset-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-lg z-10 overflow-auto">
					<h2 className="text-2xl font-bold">{event.title}</h2>
					<p className="mt-2">
						<strong>Date:</strong> {event.date}
					</p>
					<p className="mt-2">
						<strong>Time:</strong> {event.time}
					</p>
					<p className="mt-2">
						<strong>Location:</strong> {event.location}
					</p>
					<p className="mt-2">{event.description}</p>
					<button className="mt-2 text-white text-center bg-black p-2 px-4 rounded-lg">
						RSVP
					</button>
				</div>
			)}
		</div>
	);
};

export default EventCard;
