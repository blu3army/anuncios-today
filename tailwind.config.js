const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        lime: colors.lime,
        teal: colors.teal,
        rose: colors.rose
      },
      // backgroundImage:{
      //   'search-icon':  "url('/public/icons/search.png')",
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
