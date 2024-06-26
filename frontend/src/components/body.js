import React from "react";
import Header from "./header";
import Body2 from "./body2";

const Body = () => {
	return (
		<div className="flex-grow bg-[#F8F6F6] ">
			<video
				className="absolute top-0 left-0 w-full h-auto object-cover z-0 blur-sm"
				autoPlay
				loop
				muted>
				<source src="events.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute top-0 left-0 w-full h-fit bg-gradient-to-bl from-transparent to-black opacity-85 z-10"></div>
			<div className="relative z-20 pt-64">
				<div className="container mx-auto px-4"></div>
			</div>
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4 text-center pt-30 pt-96 ">
				<h4 className="text-white text-2xl font-extralight font-gothic">
					Wedding / Private / Corporate
				</h4>
				<h1 className="text-white text-6xl font-semibold font-gothic ">
					Elevate your Events
				</h1>
			</div>
			<div className="absolute my-[500px]">
				<Body2 />
			</div>
		</div>
	);
};

export default Body;
