import React from "react";
import Modal from "react-modal";
import { FaCcMastercard, FaGooglePay, FaStripe } from "react-icons/fa";
import { SiPhonepe, SiRazorpay } from "react-icons/si";

const PaymentModal = ({ isOpen, onRequestClose, onSubmit }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="flex justify-center  items-center"
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
			ariaHideApp={false} // Only if app element is not set
		>
			<div className=" bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-lg w-96">
				<h2 className="text-2xl font-bold text-center mb-4">Payment Options</h2>
				<div className="space-y-4">
					<button className="flex items-center space-x-2 p-4 bg-white/20 rounded-lg hover:bg-white/30 w-full">
						<FaCcMastercard className="text-xl text-black" />
						<span>MasterCard</span>
					</button>
					<button className="flex items-center space-x-2 p-4 bg-white/20 rounded-lg hover:bg-white/30 w-full">
						<FaGooglePay className="text-xl text-black" />
						<span>GooglePay</span>
					</button>
					<button className="flex items-center space-x-2 p-4 bg-white/20 rounded-lg hover:bg-white/30 w-full">
						<SiPhonepe className="text-xl text-black" />
						<span>PhonePe</span>
					</button>
					<button className="flex items-center space-x-2 p-4 bg-white/20 rounded-lg hover:bg-white/30 w-full">
						<SiRazorpay className="text-xl text-black" />
						<span>Razorpay</span>
					</button>
					<button className="flex items-center space-x-2 p-4 bg-white/20 rounded-lg hover:bg-white/30 w-full">
						<FaStripe className="text-xl text-black" />
						<span>Stripe</span>
					</button>
				</div>
				<form
					onSubmit={onSubmit}
					className="mt-6 flex flex-col text-black items-center space-y-4">
					<input
						type="text"
						name="upiId"
						placeholder="Enter UPI ID"
						className="p-2 w-full rounded-lg bg-white  focus:outline-none"
					/>
					<button
						type="submit"
						className="p-2 text-white bg-black rounded-lg text-white text-lg transition-shadow mx-auto hover:bg-gray-900">
						Pay Now
					</button>
				</form>
			</div>
		</Modal>
	);
};

export default PaymentModal;
