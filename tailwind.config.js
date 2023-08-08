/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			screens: {
				lg: "1440px"
			},
			fontFamily: {
				body: ["Lato"],
				header: ["Abril Fatface"],
				lato: ["Lato"],
				abril: ["Abril Fatface"],
				gothic: ["Gothic A1"]
			}
		}
	},
	plugins: []
};
