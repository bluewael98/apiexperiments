/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        '4xl': '0 40px 100px -15px rgba(0, 0, 0, 1)',
      },
      colors: {   background: "#CCCCFF",
                  neoyellow: "#F8FF1D",
                  neogreen: "#50FFAF",
                  neoblue: "#4B69FE"}
    },
    fontFamily: {
    Oswald: ["Oswald", "sans-serif"],
    }
  },
  plugins: [],
}
