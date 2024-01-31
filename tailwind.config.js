/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors:{
        'dark-blue': '#274C5B',
        'light-yellow':'#EFD372'
      },
      backgroundImage:{
        'background-1':'url(".//images/background_1.png")'
      }
    },
  },
  plugins: [],
}

