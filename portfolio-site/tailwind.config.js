/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0E0F1B",
        "dark-grey": "#22292E",
        purple: "#6C1BF0",
        grey: "#B5B5B5",
        white: "#FFFFFF",
      },
    },
    screens: {
      mob: "320px",
      // => @media (min-width: 320px) { ... }

      tblt: "768px",
      // => @media (min-width: 768px) { ... }

      dskt: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
