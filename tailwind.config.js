/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Urbanist': ['urbanist' , 'sans'] ,
        'GillSans': ['gillSans' , 'sans']
      },
    },
  },
  plugins: [],
}
