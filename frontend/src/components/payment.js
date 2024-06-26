import React, { useState } from "react";

const PaymentGateway = () => {
	const [paymentData, setPaymentData] = useState({
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		amount: 0,
	});

	const handleChange = (e) => {
		setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Payment Data:", paymentData);
		// Implement your payment gateway logic here
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="cardNumber"
				value={paymentData.cardNumber}
				onChange={handleChange}
				placeholder="Card Number"
				required
			/>
			<input
				type="text"
				name="expiryDate"
				value={paymentData.expiryDate}
				onChange={handleChange}
				placeholder="Expiry Date"
				required
			/>
			<input
				type="text"
				name="cvv"
				value={paymentData.cvv}
				onChange={handleChange}
				placeholder="CVV"
				required
			/>
			<input
				type="number"
				name="amount"
				value={paymentData.amount}
				onChange={handleChange}
				placeholder="Amount"
				required
			/>
			<button type="submit" className="bg-black p-4 text-white rounded-lg">
				Pay Now
			</button>
		</form>
	);
};

export default PaymentGateway;
