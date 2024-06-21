/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/App.js"],
  theme: {
    colors: {
      light_blue: "#bfdbfe",
      blue: {
        100: "#2563eb",
        200: "#1053e6",
      },
      dark_blue: "#172554",
      white: "#fff",
      gray: "#b1bbc9",
      black:'#000',
      transparent:'transparent'
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
