/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero': '15rem',
        'lead': '5rem'
      },
      fontFamily: {
        'sans': ['Open Sans', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

