import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

const CreateEventPage = () => {
	const [selectedEventType, setSelectedEventType] = useState("Wedding");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		companyName: "",
		eventDate: "",
		venue: "",
		startTime: "",
		finishTime: "",
		performer: "",
		package: "",
		numberOfGuests: "",
		specialDayDetails: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const eventId = uuidv4(); // Generate a random event ID
		console.log(eventId);
		const eventData = { ...formData, eventId };

		try {
			const response = await fetch("http://localhost:3000/api/events", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(eventData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to create event");
			}

			const data = await response.json();
			console.log("Success:", data);

			alert(`Event created successfully with ID: ${eventId}`);
		} catch (error) {
			console.error("Error:", error);
			alert(`Error: ${error.message}`);
		}
	};

	return (
		<div className="relative w-full font-gothic  ">
			<div className="relative w-full h-[470px]">
				<img
					className="w-full h-full object-cover blur-sm"
					src="marriage.jpg"
					alt="Event Background"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<h1 className="text-white text-cyan-50 bg-gradient-to-r text-5xl font-bold italic mb-6">
						Contact Us
					</h1>
					<h6 className="text-white text-cyan-50 text-4xl font-extralight italic">
						Make it the most Memorable Day
					</h6>
				</div>
			</div>
			<div className="w-full items-center mt-16">
				<div className="flex justify-center items-center text-4xl space-x-10 mb-8">
					{["Wedding", "Corporate", "Private"].map((type) => (
						<button
							key={type}
							className={`px-6 py-2 border ${
								selectedEventType === type
									? "bg-black text-white"
									: "bg-gray-50 text-black"
							} rounded-lg`}
							onClick={() => setSelectedEventType(type)}>
							{type}
						</button>
					))}
				</div>
				<form
					onSubmit={handleSubmit}
					className="w-full p-8 py-9 space-y-6 text-lg bg-white rounded-lg shadow-lg">
					<div className="flex flex-wrap -mx-2 mb-6">
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								First Name *
							</label>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="First Name"
								required
							/>
						</div>
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Last Name *
							</label>
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Last Name"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-2 mb-6">
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Email *
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Email"
								required
							/>
						</div>
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Phone *
							</label>
							<input
								type="text"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Phone"
								required
							/>
						</div>
					</div>
					{selectedEventType === "Wedding" && (
						<div className="flex flex-wrap -mx-2 mb-6">
							<div className="w-full md:w-1/2 px-2 mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2 italic">
									Partner Name *
								</label>
								<input
									type="text"
									name="companyName"
									value={formData.companyName}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Partner Name"
								/>
							</div>
							<div className="w-full md:w-1/2 px-2 mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2 italic">
									Number of Guests *
								</label>
								<input
									type="number"
									name="numberOfGuests"
									value={formData.numberOfGuests}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Approx if unknown"
								/>
							</div>
						</div>
					)}
					<div className="flex flex-wrap -mx-2 mb-6">
						<div className="w-full md:w-1/3 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Event Date *
							</label>
							<input
								type="date"
								name="eventDate"
								value={formData.eventDate}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="w-full md:w-1/3 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Venue/Location *
							</label>
							<input
								type="text"
								name="venue"
								value={formData.venue}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Venue/Location"
								required
							/>
						</div>
						<div className="w-full md:w-1/3 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Start Time *
							</label>
							<input
								type="time"
								name="startTime"
								value={formData.startTime}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="w-full md:w-1/3 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Finish Time *
							</label>
							<input
								type="time"
								name="finishTime"
								value={formData.finishTime}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap h-1/3 -mx-2 mb-6">
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Performer
							</label>
							<input
								type="text"
								name="performer"
								value={formData.performer}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Leave blank if unsure/picked favourites"
							/>
						</div>
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Package
							</label>
							<input
								type="text"
								name="package"
								value={formData.package}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Select"
							/>
						</div>
						<div className="w-full px-2 mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2 italic">
								Tell us about your special day!
							</label>
							<textarea
								name="specialDayDetails"
								value={formData.specialDayDetails}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Tell us about your special day!"
							/>
						</div>
					</div>
					<Link to="/guest">
						<div className="text-center mt-6">
							<button
								type="submit"
								className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full text-2xl">
								Submit
							</button>
						</div>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default CreateEventPage;
