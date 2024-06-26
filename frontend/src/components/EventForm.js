import React from "react";

const EventForm = ({ eventType }) => {
	// Define labels and placeholders based on eventType
	const isWedding = eventType === "wedding";
	const isCorporate = eventType === "corporate";
	const isPrivate = eventType === "private";

	const partnerLabel = isWedding
		? "Partner's Name"
		: isCorporate
		? "Company Name"
		: "Company/Partner's Name";
	const dateLabel = isWedding ? "Wedding Date" : "Event Date";

	return (
		<form className="w-full pl-8 space-y-6 pl-12 pr-12 text-lg font-gothic  ">
			<div className="flex flex-wrap -mx-2 mb-6">
				{/* First Name */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						First Name *
					</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="First Name"
					/>
				</div>
				{/* Last Name */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Last Name *
					</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Last Name"
					/>
				</div>
				{/* Email */}
				<div className="w-full md:w-1/3 px-2 mb-4 italic">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email *
					</label>
					<input
						type="email"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Email"
					/>
				</div>
			</div>

			{/* Additional Fields */}
			<div className="flex flex-wrap -mx-2 mb-6">
				{/* Phone */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="italic block text-gray-700 text-sm font-bold mb-2">
						Phone *
					</label>
					<input
						type="number"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Phone"
					/>
				</div>
				{/* Partner's/Company Name */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						{partnerLabel} *
					</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder={
							isWedding ? "Partner's Name" : "Company/Partner's Name"
						}
					/>
				</div>
				{/* Wedding/Event Date */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						{dateLabel} *
					</label>
					<input
						type="date"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
			</div>

			{/* More Fields */}
			<div className="flex flex-wrap -mx-2 mb-6">
				{/* Venue */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Venue/Location *
					</label>
					<input
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Venue/Location"
					/>
				</div>
				{/* Start Time */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Start Time *
					</label>
					<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<option>Select</option>
						{/* Add time options here */}
					</select>
				</div>
				{/* Finish Time */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Finish Time *
					</label>
					<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<option>Select</option>
						{/* Add time options here */}
					</select>
				</div>
			</div>

			<div className="flex flex-wrap -mx-2 mb-6">
				{/* Performer */}
				<div className="w-full md:w-1/3 px-2 mb-4" type="">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Performer
					</label>
					<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<option>Leave blank if unsure/picked favourites</option>
						{/* Add performer options here */}
					</select>
				</div>
				{/* Package */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						Package
					</label>
					<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<option>Select</option>
						{/* Add package options here */}
					</select>
				</div>
				{/* No. of Guests */}
				<div className="w-full md:w-1/3 px-2 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2 italic">
						No. of guests
					</label>
					<input
						type="number"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Approx if unknown"
					/>
				</div>
			</div>

			{/* Special Day */}
			<div className="w-full px-2 mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2 italic">
					Tell us about your special day!
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Tell us about your special day!"
				/>
				<div className="text-center mt-3 mb-3">
					<button className="bg-black text-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-2xl">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default EventForm;
