/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				background: "#FAF9F6",
				text: "#111111",
				accent: "#FF6F61",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"], // or whatever you prefer
			},
		},
	},
	plugins: [],
};
