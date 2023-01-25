/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      visby: ["Visby", "system-ui"],
    },

    extend: {
      colors: {
        yellow: {
          1: "#B59B8D",
        },
      },
    },
  },
  plugins: [],
};
