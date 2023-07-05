import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [],
    theme: {
        extend: {
            width: {
                "160": "40rem",
            },
            height: {
                "160": "40rem",
                "200": "50rem",
            },
            fontFamily: {
                raleway: ["Raleway"],
            },
            colors: {
                green: "#b2d6c0",
                orange: "#eb834a",
                red: "#ef4444",
                dark: "#040111",
                darkBlue: "#161e3e",
            },
            backgroundImage: {
                gradientText:
                    'radial-gradient(circle at var(--x, 50%) var(--y, 10%), white 0%, theme("colors.red") var(--r, 0%))',
            },
        },
    },
} satisfies Config;
