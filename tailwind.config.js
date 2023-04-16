/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				londrina: [
					"Londrina Solid",
					"sans-serif",
				],
				ptSans: [
					"PT Sans",
					"sans-serif",
				]
			},
			colors: {
				'nouns-blue': '#d5d7e1'
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			  }
		},
	},
	plugins: [],
};
