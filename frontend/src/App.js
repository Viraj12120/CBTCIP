import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/body";
import CreateEventPage from "./pages/createEvent";
import Header from "./components/header";
import Payment from "./pages/Payment";
import EventCardPage from "./pages/EventCardPage";
import GuestList from "./components/guestList";
const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Body />} />
					<Route path="/events" element={<EventCardPage />} />

					<Route path="/create" element={<CreateEventPage />} />
					<Route path="/guest" element={<GuestList />} />
					<Route path="/payment/:eventId" element={<Payment />} />
					<Route path="/payment" element={<Payment />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
