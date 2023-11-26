/** @type {import("prettier").Config} */
const config = {
    plugins: [
        require.resolve("prettier-plugin-tailwindcss"),
        require.resolve("prettier-plugin-astro"),
    ],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    arrowParens: "always",
    printWidth: 80,
};

module.exports = config;
