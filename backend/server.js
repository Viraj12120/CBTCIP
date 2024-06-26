const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dontenv = require("dotenv");

dontenv.config();

const app = express();
const port = 3000;
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
	.connect(mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/events", require("./routes/eventRoute"));
app.use("/api/guests", require("./routes/guestRoute"));

app.listen(port, () => console.log(`Server running on port ${port}`));
