/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        "custom-blue": "#167BEF",
        "custom-hoverblue": "#0062D2",
        "custom-lightgray": "#F5F5F5",
        "custom-darkgray": "#2A2A2C",
        "custom-dark": "#1E1E1E",
        "custom-hovergray": "#F3F3F3",
        "custom-placeholder": "#9AA0A6",
        "custom-inputbg": "#F9F9F9",
        "custom-inputtext": "#626262",
        "custom-border": "#EEEEEE",
        danger: "#FF3333",
      },
      borderColor: {
        DEFAULT: "#EEEEEE",
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
