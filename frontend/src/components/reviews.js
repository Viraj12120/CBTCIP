import React from "react";

// Mock review data
const reviews = [
	{
		author: "Alex R",
		quote: "Incredible service from start to finish...",
		review:
			"The team at Unplugged Events exceeded our expectations. Their attention to detail and handling of unexpected changes was remarkable. They made our corporate event memorable with excellent coordination and superb entertainment. Will definitely work with them again!",
	},
	{
		author: "Sam K",
		quote: "Absolutely seamless experience...",
		review:
			"From planning to execution, everything went perfectly. The staff were professional, and the event was a huge success. The event was flawlessly organized, and the entertainment was top-notch. Couldn't have asked for a better experience.",
	},
	{
		author: "Taylor B",
		quote: "Wonderful team, great event!",
		review:
			"The event was flawlessly organized, and the entertainment was top-notch. Couldn't have asked for a better experience. Their innovative approach and dedication were evident throughout. The atmosphere was lively, and the execution flawless.",
	},
	{
		author: "Emily S",
		quote: "Exceeded all expectations!",
		review:
			"Unplugged Events went above and beyond for our wedding. The attention to detail and personalized service made the day truly magical. The entertainment was fantastic, and our guests are still talking about it! Highly recommend!",
	},
	{
		author: "Chris M",
		quote: "Outstanding service!",
		review:
			"Unplugged Events made our anniversary celebration unforgettable. From the moment we contacted them, they were attentive and responsive. The event was flawless, and the entertainment was exceptional. Can't thank them enough!",
	},
];

const ReviewCard = ({ author, quote, review }) => (
	<div className="bg-white rounded-lg shadow-md p-6 my-4">
		<div className="text-7xl text-gray-800 mb-2">❝</div>
		<h3 className="text-2xl font-semibold mb-2">{author}</h3>
		<p className="italic mb-4">"{quote}"</p>
		<p className="text-gray-600">{review}</p>
	</div>
);

const Reviews = () => (
	<div className="w-1/2 h-auto mx-auto py-6 px-4">
		{reviews.map((review, index) => (
			<ReviewCard
				key={index}
				author={review.author}
				quote={review.quote}
				review={review.review}
			/>
		))}
	</div>
);

export default Reviews;
