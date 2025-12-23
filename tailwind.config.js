/** @type {import('tailwindcss').Config} */
config.colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "selector",
  allowJs: true,
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss"],
  content: ["./src/**/*.{html,ts,scss}"],
};
