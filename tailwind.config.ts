import type { Config } from "tailwindcss";

export default {
    mode: "jit",
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
        },
    },
} satisfies Config;
