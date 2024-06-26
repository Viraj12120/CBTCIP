import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="absolute mt-auto w-full bg-slate-50 text-black ">
			<div className="flex-row items-center justify-between mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 ">
					<div>
						<h2 className="font-bold text-lg mt-6 ml-11 mb-4 ">
							Entertainment
						</h2>
						<ul>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Solo Acoustic
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Solo Acoustic DJs
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Acoustic Duos
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Trios & Bands
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Feature Acts
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									DJs
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									Sax
								</a>
							</li>
							<li className="mb-2 ml-11">
								<a href="#" className="hover:underline">
									DJ Live Bands
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold text-lg mt-6 mb-4">Events</h2>
						<ul>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Wedding
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Corporate Entertainment
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Private Events
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Venue Entertainment
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Wedding & Event Guides
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold text-lg mb-4 mt-6">Event Portal</h2>
						<ul>
							<li className="mb-2">
								<a href="#" className="hover:underline hover:">
									Event Booking
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									RSVP
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									FAQ
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:underline">
									Login/Register
								</a>
							</li>
						</ul>
					</div>
					<h1 className="text-end ml-[1000px] text-5xl -mt-68 pl-40">
						UNPLUGGED
					</h1>
				</div>
				<div className="border-t border-gray-700 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center">
					<p className="text-black text-xs font-normal">
						&copy; {new Date().getFullYear()}. All Rights Reserved by Unplugged
						Event Planners™.
					</p>
					<p className="text-gray-400 text-sm items-center pr-16">
						Made with ❤️ from India
					</p>
					<div className="flex mt-4 md:mt-0 space-x-4">
						<a href="#" className="text-gray-400 hover:text-black">
							<FaFacebookF />
						</a>
						<a href="#" className="text-gray-400 hover:text-black">
							<FaInstagram />
						</a>
						<a href="#" className="text-gray-400 hover:text-black">
							<FaTwitter />
						</a>
						<a href="#" className="text-gray-400 hover:text-black">
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
