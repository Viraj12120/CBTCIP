import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
	// Array of image URLs
	const images = [
		"Wedding.jpg",
		"corporate.jpg",
		"party.jpg",
		// Add more image URLs as needed
	];
	const captions = [
		"Wedding Events",
		"Corporate Events",
		"Party Events",
		// Add more captions as needed
	];
	const descrip = [
		"Celebrating the moments",
		"Embracing Small Winnings lead to Great Success",
		"Let's Rock the Party ",
	];

	// State to track the current image index
	const [currentImage, setCurrentImage] = useState(0);

	// Function to handle next image
	const nextImage = () => {
		setCurrentImage((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	// Function to handle previous image
	const prevImage = () => {
		setCurrentImage((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Set up autoplay functionality
	useEffect(() => {
		const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
		return () => clearInterval(interval); // Clean up the interval on component unmount
	}, []);

	return (
		<div className="relative w-full py-8 font-gothic ">
			<div className="flex justify-center items-center relative">
				<div className="absolute right-0 bg-gradient-to-l opacity-50 from-transparent to-black w-full h-[580px] z-20 rounded-lg"></div>
				<button
					className="absolute w-8 h-8 left-0 top-1/2 transform -translate-y-1/2 bg-white opacity-60 text-gray-700 rounded-full flex items-center justify-center ml-4 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 z-30"
					onClick={prevImage}>
					&lt; {/* Left arrow */}
				</button>
				<img
					src={images[currentImage]}
					alt="pic"
					className="w-full h-[580px] object-cover rounded-lg shadow-lg"
					style={{ position: "relative", zIndex: 1 }}
				/>
				<button
					className="absolute w-8 h-8 right-0 top-1/2 transform -translate-y-1/2 bg-white opacity-60 text-gray-700 rounded-full flex items-center justify-center mr-4 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 z-30"
					onClick={nextImage}>
					&gt; {/* Right arrow */}
				</button>

				<div className="absolute inset-0 flex-row items-end justify-start p-16 z-20 mt-80">
					<p className="text-2xl text-white pb-1">{captions[currentImage]}</p>
					<p className="text-white text-5xl">{descrip[currentImage]}! </p>
				</div>
				<Link to="/create">
					<button
						className="absolute bottom-8 left-16 z-30 mr-7 cursor-pointer bg-black opacity-20 text-white text-lg rounded-full p-2 hover:text-black opacity-50 hover:bg-white opacity-20 transition-all duration-300 border-2 hover:border-black"
						type="button">
						Book Now
					</button>
				</Link>
				<Link to="/events">
					<button
						className="absolute flex-row justify-between left-52 bottom-8 p-2 z-30 mr-7 cursor-pointer bg-black opacity-20 text-white text-lg rounded-full hover:text-black opacity-50 hover:bg-white opacity-20 transition-all duration-300 border-2 hover:border-black"
						type="button">
						Reserve a Seat
					</button>
				</Link>
			</div>

			<div className="flex justify-center mt-4">
				{/* Display image indicators */}
				{images.map((_, index) => (
					<span
						key={index}
						className={`mx-2 w-3 h-3 rounded-full bg-gray-500 ${
							index === currentImage ? "bg-gray-700" : ""
						}`}></span>
				))}
			</div>
		</div>
	);
};

export default Carousel;
