/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'yellowtail': ['"Yellowtail"','serif']
    },
    extend: {
      colors:{
        'dark-blue': '#274C5B',
        'light-yellow':'#EFD372',
        'light-green':'#7EB693',
        'light-black':'#525C60'
      },

      backgroundImage:{
        'background-1':'url(".//images/background_1.png")',
        'background-2':'url(".//images/background_2.jpg")',
        'background-3':'url(".//images/background_3.jpg")'
      }
    },
  },
  plugins: [],
}

