/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				red: "#ef4444",
				orange: "#eb834a",
				green: "#b2d6c0",
				dark: "#040111",
				darkBlue: "#161e3e",
			},
			screens: {
				lg: "1440px",
			},
			fontFamily: {
				body: ["Raleway"],
				header: ["Geologica"],

				lato: ["Lato"],
				abril: ["Abril Fatface"],
				gothic: ["Gothic A1"],
				montserrat: ["Montserrat"],
				raleway: ["Raleway"],
				geolica: ["Geologica"],
			},
			animation: {
				slideUp: "slideUp 1s",
				slideDown: "slideDown 1s",
				slideLeft: "slideLeft 1s",
				slideRight: "slideRight 1s",
			},
			keyframes: {
				slideUp: {
					"0%": {
						transform: "translateY(10%)",
						opacity: "0%",
					},
					"50%": {
						transform: "translateY(0%)",
					},
					"90%": {
						opacity: "100%",
					},
				},
				slideDown: {
					"0%": {
						transform: "translateY(-10%)",
						opacity: "0%",
					},
					"50%": {
						transform: "translateY(0%)",
					},
					"90%": {
						opacity: "100%",
					},
				},
				slideLeft: {
					"0%": {
						transform: "translateX(10%)",
						opacity: "0%",
					},
					"50%": {
						transform: "translateX(0%)",
					},
					"90%": {
						opacity: "100%",
					},
				},
				slideRight: {
					"0%": {
						transform: "translateX(-10%)",
						opacity: "0%",
					},
					"50%": {
						transform: "translateX(0%)",
					},
					"90%": {
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [],
};
