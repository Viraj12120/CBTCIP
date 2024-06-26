const { FaAccusoft } = require("react-icons/fa");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				mono: ["Menlo", "Monaco", "Courier New", "monospace"],
				Phil: ["Philosopher"],
				FatFace: ["Abril Fatface"],
				gothic: ["Gothic A1"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
