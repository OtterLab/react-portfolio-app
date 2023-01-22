/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "light-navy": "#242A35",
        "dark-navy": "#1A1F28",
        "navy-black": "#1E232D",
        "light-yellow": "#FCB51D",
        "orange": "#F68E1F"
      }
    },
  },
  plugins: [],
}
