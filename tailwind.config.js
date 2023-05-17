/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-raleway)", ...fontFamily.sans],
      },
      colors: {
        amber: {
          550: "#e7d0ba",
          650: "#a58d8d",
        },
      },
      textColor: {
        bronze: "var(--color-bronze)",
      },
      fadeInUp: {
        "0%": {
          opacity: 0,
          transform: "translate3d(0, 30%, 0)",
        },
        "100%": {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.3s ease-in-out",
      },
      height: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
      minHeight: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
      maxHeight: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
