import React, { useState, useEffect } from "react";
import PaymentModal from "./PaymentModal";

const Payment = ({ eventId }) => {
	const [eventDetails, setEventDetails] = useState({});
	const [guestList, setGuestList] = useState([]);
	const [showPaymentModal, setShowPaymentModal] = useState(false);

	const fetchEventDetails = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/events/${eventId}`
			);
			const data = await response.json();
			setEventDetails(data);
		} catch (error) {
			console.error("Error fetching event details:", error);
		}
	};

	const fetchGuests = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/guests/${eventId}`
			);
			const data = await response.json();
			setGuestList(data);
		} catch (error) {
			console.error("Error fetching guest list:", error);
		}
	};

	useEffect(() => {
		fetchEventDetails();
		fetchGuests();
	}, [eventId]);

	const handlePayment = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const paymentMethod = formData.get("paymentMethod");
		alert(`Processing payment with ${paymentMethod}`);
		setShowPaymentModal(false);
		// Implement payment processing here
	};

	return (
		<div className="absolute flex w-full h-full bg-neutral-100 ">
			<div className="relative w-3/5 h-full">
				<video
					className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
					autoPlay
					loop
					muted>
					<source src="colors.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			<div className="flex flex-col w-1/2 h-auto justify-center items-center p-6">
				<h2 className="text-5xl mb-4">Event Payment</h2>
				<div className="flex flex-col w-full space-y-5 p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
					<h3 className="text-3xl">Event Details</h3>
					<p>
						<strong>Event Name:</strong> {eventDetails.name}
					</p>
					<p>
						<strong>Date:</strong> {eventDetails.date}
					</p>
					<p>
						<strong>Location:</strong> {eventDetails.location}
					</p>

					<h3 className="text-3xl">Guest List</h3>
					<ul>
						{guestList.map((guest) => (
							<li key={guest._id}>
								{guest.name} - {guest.email}
							</li>
						))}
					</ul>

					<div className="flex justify-center">
						<button
							className="bg-black p-2 rounded-lg w-2/5 text-center text-white text-lg hover:bg-gray-900"
							onClick={() => setShowPaymentModal(true)}>
							Proceed to Payment
						</button>
					</div>
				</div>

				<PaymentModal
					isOpen={showPaymentModal}
					onRequestClose={() => setShowPaymentModal(false)}
					onSubmit={handlePayment}
				/>
			</div>
		</div>
	);
};

export default Payment;
