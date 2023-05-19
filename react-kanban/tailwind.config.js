/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Noah", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000000",
        "very-dark-grey": "#20212C",
        "dark-grey": "#2B2C37",
        "lines-dark": "#3E3F4E",
        "medium-grey": "#828FA3",
        "lines-light": "#E4EBFA",
        "light-grey": "#F4F7FD",
        white: "#FFFFFF",
        "main-purple": "#635FC7",
        "main-purple-hover": "#A8A4FF",
        red: "#EA5555",
        "red-hover": "#FF9898",
      },
      width: {
        51: "500px",
      },
    },
  },
  plugins: [],
};
