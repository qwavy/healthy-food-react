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
        'light-black':'#525C60',
        'light-grey':"#ECECEC",
        
      },

      backgroundImage:{
        'background-1':'url(".//images/background_1.png")',
        'background-2':'url(".//images/background_2.jpg")',
        'background-3':'url(".//images/background_3.jpg")',
        'background-4':'url(".//images/background_4.png")',
        'background-5':'url(".//images/background_5.jpg")',
        'about-background-header':'url(".//images/about_background_header.png")'
      }
    },
  },
  plugins: [],
}

