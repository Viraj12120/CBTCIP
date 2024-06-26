import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestList = ({ eventId }) => {
	const [guestList, setGuestList] = useState([]);
	const [newGuest, setNewGuest] = useState({ name: "", email: "" });

	const fetchGuests = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/guests/${eventId}`
			);
			const data = await response.json();
			setGuestList(data);
			console.log("guestList:", data);
		} catch (error) {
			console.error("Error fetching guest list:", error);
		}
	};

	useEffect(() => {
		fetchGuests();
	}, []);

	const addGuest = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:3000/api/guests/${eventId}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newGuest),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to add guest");
			}

			const addedGuest = await response.json();
			console.log("Added guest details:", addedGuest, "Event ID:", eventId);
			alert("Guest added successfully");

			setNewGuest({ name: "", email: "" });
			fetchGuests();
		} catch (error) {
			console.error("Error adding guest:", error);
		}
	};

	const removeGuest = async (guestId) => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/guests/${eventId}/${guestId}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to remove guest");
			}

			fetchGuests();
		} catch (error) {
			console.error("Error removing guest:", error);
		}
	};

	return (
		<div className="relative flex flex-col w-full justify-center items-center space-x-4 space-y-4 my-32 font-gothic">
			<video
				className="relative top-0 left-0 w-full h-1/2 -my-32 object-cover  blur-sm"
				autoPlay
				loop
				muted>
				<source src="events.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<h2 className="absolute z-20 top-4 flex-col text-5xl text-white">
				Guest List
			</h2>
			<form
				action="POST"
				className="absolute z-20 flex flex-col w-1/3 h-3/5 space-y-5 p-6 bg-white/30  backdrop-blur-md rounded-xl border border-white/10 shadow-lg"
				onSubmit={addGuest}>
				<input
					className="px-4 py-2 rounded-md text-lg bg-white/40 hover:bg-white/60 placeholder-gray-600 focus:bg-white/50"
					type="text"
					placeholder="Name"
					value={newGuest.name}
					onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
					required
				/>
				<input
					className="px-4 py-2 rounded-md text-lg bg-white/40 hover:bg-white/60 placeholder-gray-600 focus:bg-white/50"
					type="email"
					placeholder="Email"
					value={newGuest.email}
					onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
					required
				/>
				<input
					className="px-4 py-2 rounded-md text-lg bg-white/40 hover:bg-white/60 placeholder-gray-600 focus:bg-white/50"
					type="phone"
					placeholder="Phone no"
					value={newGuest.phone}
					onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
					required
				/>
				<input
					className="px-4 py-2 rounded-md text-lg bg-white/40 hover:bg-white/60  placeholder-gray-600 focus:bg-white/50"
					type="text"
					placeholder="City"
					value={newGuest.city}
					onChange={(e) => setNewGuest({ ...newGuest, city: e.target.value })}
					required
				/>
				<button
					className="bg-black p-2 rounded-lg text-white text-lg hover:animate-pulse hover:bg-gray-800"
					type="submit">
					Add Guest
				</button>
			</form>
			<Link to="/payment">
				<div className="absolute z-40 bottom-0 right-10 ">
					<button className="bg-black text-white text-lg p-2 px-4 rounded-xl ">
						Next
					</button>
				</div>
			</Link>

			<ul>
				{guestList.map((guest) => (
					<li key={guest._id}>
						{guest.name} - {guest.email}
						<button
							className="bg-black p-2 rounded-lg text-white text-lg hover:animate-pulse hover:bg-gray-800"
							onClick={() => removeGuest(guest._id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GuestList;
