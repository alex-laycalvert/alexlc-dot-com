/** @type {import("prettier").Config} */
const config = {
    plugins: [
        require.resolve("prettier-plugin-tailwindcss"),
        require.resolve("prettier-plugin-astro"),
    ],
    tabWidth: 4,
    arrowParens: "always",
    trailingComma: "all",
    semi: true,
    singleQuote: false,
};

module.exports = config;
