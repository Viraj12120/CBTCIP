import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "./Corousel";
import Reviews from "./reviews";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Body2 = () => {
	return (
		<div className="w-full text-black  bg-[#F8F6F6]  ">
			<div className="mx-auto py-28 px-4  animate-on-scroll">
				<h2 className="text-2xl font-mono font-extralight mb-1 pl-8 ">
					Welcome to Unplugged
				</h2>
				<p className="flex justify-between container w-3/5 text-5xl text-left font-bold mb-2 pl-8 ">
					Turning your dream events into a reality.
				</p>
				<div className="text-2xl font-thin w-1/2 text-justify ml-auto font-semibold font-gothic">
					<p className="pb-4">
						Unplugged Event Planners is driven by a passion for creating
						unforgettable experiences. Founded, owned, and operated by event
						enthusiasts, we're dedicated to offering a service that not only
						enhances our clients' reputations but also delivers the personalized
						attention they deserve.
					</p>
					<p className="pb-4">
						Our team comprises professionals who are deeply rooted in the event
						industry, ensuring that every detail of your occasion is
						meticulously planned and executed. We take pride in curating a
						roster of top-tier event planners, each equipped with the expertise
						and creativity to elevate weddings, corporate gatherings, and
						private events alike.
					</p>
					<p className="mb-10">
						Choose from a diverse selection of services tailored to meet your
						unique needs. Whether you're seeking solo acoustic performances to
						set the perfect ambiance, dynamic acoustic duos that can seamlessly
						transition to DJing, or vibrant trios/bands to keep the energy
						alive, we have you covered.
					</p>
				</div>
				<div className="flex justify-between container w-3/5 py-8 text-3xl text-left font-extralight mb-10 pl-8 font-FatFace ">
					<p>Crafting moments that matter.</p>
				</div>
			</div>

			<div className="relative w-full h-[800px] text-black py-13 flex justify-center mb-7 -mt-32 animate-on-scroll my-96">
				<video
					className="w-full h-auto rounded-lg object-cover"
					autoPlay
					loop
					muted>
					<source src="guitar.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="absolute inset-0 flex items-center justify-between z-20 px-10">
					<div className="flex flex-col items-start pt-6">
						<h1 className="text-white text-2xl font-extralight">
							Choose your event
							<p className="font-extrabold text-6xl">It all Start's here.</p>
						</h1>
					</div>
					<div className="flex flex-col  items-end w-2/5">
						<p className="text-white/60  text-3xl italic mb-4 text-center">
							Transform your event ideas into unforgettable experiences. Our
							expert planners deliver tailored solutions for weddings, corporate
							events, and private gatherings, ensuring every detail is perfect.
							Make your vision a reality with us.
						</p>
						<div className="flex flex-wrap gap-2 px-24 justify-end  mb-8">
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Disco
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								RnB
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Sax
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Soul
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Jazz
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Rock
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Folk
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Acoustic DJ's
							</button>
							<button className="bg-black bg-opacity-70 text-white text-lg rounded-full px-4 py-2 hover:text-black hover:bg-white hover:bg-opacity-90 transition-all duration-300 border-2 border-transparent hover:border-black">
								Blues
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="carousel animate-on-scroll">
				<Carousel />
			</div>
			<div className="mt-10 container w-full reviews animate-on-scroll">
				<div className="flex flex-col items-start">
					<h1 className="font-light text-2xl mb-2 pl-5">Reviews</h1>
					<span className="font-bold text-6xl w-1/2 pl-5">
						Some of our valued Customer Reviews
					</span>
				</div>
				<div className="flex justify-end -mt-48 ml-7">
					<div className="w-2/3">
						<Reviews />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Body2;
