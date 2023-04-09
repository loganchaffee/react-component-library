/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    jsxSingleQuote: true,
};

module.exports = config;
