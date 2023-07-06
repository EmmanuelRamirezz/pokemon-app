/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grass': '#37C331',
        'poison': '#7E2BB2',
        'fire': '#E64545',
        'water': '#2F83BC',
        'bug': '#B28A23',
        'flying': '#A09F9E',
        'normal': '#D13C95',
        'electric': '#ECC401',
        'ground': '#CC943B',
        'fairy': '#D448DC',
        

      }
    },
  },
  plugins: [],
}