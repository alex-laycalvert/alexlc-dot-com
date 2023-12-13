/** @type {import("prettier").Config} */
const config = {
    plugins: [
        require.resolve("prettier-plugin-astro"),
        require.resolve("prettier-plugin-tailwindcss"),
    ],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    arrowParens: "always",
    trailingComma: "all",
};

module.exports = config;
