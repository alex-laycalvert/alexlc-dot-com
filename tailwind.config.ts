import type { Config } from "tailwindcss";

export default {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway"],
            },
            colors: {
                green: "#b2d6c0",
                orange: "#eb834a",
                dark: "#040111",
                darkBlue: "#161e3e",
            },
        },
    },
} satisfies Config;
