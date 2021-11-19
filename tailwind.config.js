const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
    fontFamily: {
      sans: ['"PT Sans"', "sans-serif"],
    },
    colors: {
      ...colors,
      one: "#012A36", // purple like
      two: "#29274C",
      three: "#7E52A0",
      four: "#E6BCCD",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
