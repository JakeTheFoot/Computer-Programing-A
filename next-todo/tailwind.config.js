/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "super-dark-grey": "#1A1B26",
        "very-dark-grey": "#20212C",
        "dark-grey": "#2B2C37",
        "lines-dark": "#3E3F4E",
        grey: "#dbdbdb",
        "medium-grey": "#828FA3",
        "lines-light": "#E4EBFA",
        "light-grey": "#F4F7FD",
        "very-light-grey": "#F9FAFC",
        white: "#FFFFFF",
        "main-purple": "#124ec7",
        "main-purple-hover": "#A8A4FF",
        red: "#EA5555",
        "red-hover": "#FF9898",
      },
    },
  },
  plugins: [],
};
