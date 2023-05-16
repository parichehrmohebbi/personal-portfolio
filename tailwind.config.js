/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./pages/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/components/*.{ts,tsx,js,jsx}",
    "./src/stories/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#BEA48D",
      secondary: "#F5F5F5",
      thritery: "#F3ECE8",
      white: "white",
      black: "black",
      green: "green",
    },

    extend: {
      colors: {
        primary: {
          200: "#BEA48D",
          400: "#8D7B69",
          600: "#8D7B69",
        },
        secondary: {
          200: "#F5F5F5",
          300: "#d6d3d1",
          400: "gray",
          900: "#27272a",
        },
        blue: {
          950: "#17275c",
        },
      },
      letterSpacing: {
        widest: ".50em",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": ["0 25px 45px rgba(0, 0, 0, 0.25)"],
      },
    },

    plugins: [],
  },
};
