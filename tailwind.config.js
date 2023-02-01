
/** @type {import('tailwindcss').Config} */

// https://letmefail.com/nextjs/how-to-add-custom-fonts-to-nextjs-and-tailwind-css-application/
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ylw":"#fcb72b",
        "dark-navy":"#495567",
        "dim-grey":"#939caa",
        "light-grey":"#efecf4",
        "snow":"#f2f5f9",
        "light-ylw":"#fff4df",
        "clear-gray": "#222020c4"
      },
      fontFamily: {
        "space-mono": ["Space Mono", ...defaultTheme.fontFamily.sans],
        "lexend-deca": ["Lexend Deca", ...defaultTheme.fontFamily.sans],

      },
      backgroundImage:{
        "hero-mobile":"url(/assets/images/home-hero-mobile.jpg)"
      }
    },
  },
  plugins: [],
}