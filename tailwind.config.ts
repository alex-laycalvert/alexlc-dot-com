import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                backgroundGradient:
                    "linear-gradient(107.56deg, #0A0A0E 0%, #080516 100%);",
            },
            fontFamily: {
                raleway: "Raleway",
            },
            colors: {
                lightGreen: "#c6f6c8",
            },
        },
    },
    plugins: [],
} satisfies Config;
