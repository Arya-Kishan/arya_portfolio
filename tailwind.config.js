/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgColor1": "#110229",
        "bgColor2": "#0F0736",
        "btnColor1": "#FACC15",
        "cardShadow1": "#FACC15",
        "btnColor2": "#14195B",
        "btnHover1": "#012854",
        "txtColor1": "white",
      }
    },
  },
  plugins: [],
}