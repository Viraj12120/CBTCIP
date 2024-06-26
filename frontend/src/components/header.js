import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="bg-black fixed top-0 left-0 w-full text-white py-4 z-40">
			<div className="mx-auto px-5 flex items-center justify-between">
				<h1 className="text-4xl font-semibold">UNPLUGGED</h1>
				<div className="flex space-x-3 items-center space-x-6">
					<button
						className="border-white border rounded-full p-2 text-white transition-all duration-300 z-30 hover:bg-white hover:text-black"
						type="button">
						Log in
					</button>
					<Link to="/create">
						<button
							className="border-white border rounded-full p-2 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black"
							type="button">
							Enquire Now
						</button>
					</Link>
					{/* Hamburger Menu Button */}
					<button className="ml-4 focus:outline-none z-50" onClick={toggleMenu}>
						{menuOpen ? (
							<span className="text-3xl font-bold">×</span>
						) : (
							<span className="text-3xl">☰</span>
						)}
					</button>
				</div>
			</div>
			{/* Menu */}
			{menuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-90 text-white z-50 flex items-center justify-center">
					<video
						className="absolute top-0 left-0 w-full h-full object-cover z-10"
						autoPlay
						loop
						muted>
						<source src="dj.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					{/* Close Button */}
					<button
						className="absolute top-5 right-5 text-3xl font-bold z-50 focus:outline-none"
						onClick={toggleMenu}>
						×
					</button>
					{/* Menu Content */}
					<nav className="relative z-20 w-full h-screen text-center flex justify-between space-x-72 bg-black bg-opacity-50 p-10 rounded-lg">
						<div className="my-52">
							<h2 className="text-4xl font-bold mb-4">Entertainment</h2>
							<ul className="space-y-2">
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Solo Acoustic
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Solo Acoustic DJs
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Acoustic Duos
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Trios & Bands
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Feature Acts
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									DJs
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Sax
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									DJ Live Bands
								</li>
							</ul>
						</div>
						<div className="my-52">
							<h2 className="text-4xl font-bold mb-4">Events</h2>
							<ul className="space-y-2">
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Wedding
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Corporate Entertainment
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Private Events
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Venue Entertainment
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Wedding & Event Guides
								</li>
							</ul>
						</div>
						<div className="my-52 pr-2">
							<h2 className="text-4xl font-bold mb-4">For Clients</h2>
							<ul className="space-y-2">
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									Login/Register
								</li>
								<li className="hover:underline hover:underline-offset-4 hover:text-white cursor-pointer">
									FAQ
								</li>
							</ul>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
