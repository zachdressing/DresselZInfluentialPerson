/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

		//root index files add this
    "./*.{html,js}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      grey: '#808080',
      dark: '#272727',
    }
  },
  plugins: [],
}

