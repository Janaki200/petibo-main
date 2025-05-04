/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", "serif"],
      },
      colors: {
        primary: "#d1c8bf",
        secondary: "#b2aba3",
        primaryDark: "#a09992",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      }
    },
  },
  plugins: [],
}

