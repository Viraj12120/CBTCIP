import React from "react";
import Reviews from "./reviews";

const ReviewsSection = () => {
	return (
		<div className="mt-10 w-full px-5">
			<h1 className="font-light text-2xl mb-2 pl-5">Reviews</h1>
			<span className="font-bold text-6xl w-full pl-5">
				Some of our valued Customer Reviews
			</span>
			<div className="flex justify-center mt-5">
				<div className="w-full md:w-2/3">
					<Reviews />
				</div>
			</div>
		</div>
	);
};

export default ReviewsSection;
