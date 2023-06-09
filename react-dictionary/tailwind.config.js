/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#A445ED",
        red: "#FF5252",
        white: "#FFFFFF",
        "super-light-grey": "#F4F4F4",
        "very-light-grey": "#E9E9E9",
        "light-grey": "#757575",
        grey: "#3A3A3A",
        "dark-grey": "#2D2D2D",
        "very-dark-grey": "#1F1F1F",
        "super-dark-grey": "#050505",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        lora: ["Lora", "serif"],
        inconsolata: ["inconsolata", "monospace"],
      },
      fontSize: {
        "heading-l": "4rem", // 64px
        "heading-m": "1.5rem", // 24px
        "heading-s": "1.25rem", // 20px
        "body-m": "1.125rem", // 18px
        "body-s": "0.875rem", // 14px
      },
      lineHeight: {
        "heading-l": "4.8125rem", // 77px
        "heading-m": "1.8125rem", // 29px
        "heading-s": "1.5rem", // 24px
        "body-m": "1.5rem", // 24px
        "body-s": "1.0625rem", // 17px
      },
      fontWeight: {
        "heading-l": "700", // bold
        "heading-m": "400", // regular
        "heading-s": "400", // regular
        "body-m": "400", // regular
        "body-s": "400", // regular
        plugins: [],
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
  },
};
