/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'monserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        'maroon': '#6C0404'
      },
      spacing:{
        '05': '500px',
        '400': '40%',
        '500': '50%',
        '600': '60%',
        '700': '70%',
        '800': '80%',
        '900': '90%'
      }
    },
  },
  plugins: [],
}
