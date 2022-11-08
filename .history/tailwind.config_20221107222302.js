/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    fontFamily: {
      'Cairo': ['"Cairo"'],
      'Inconsolada': ['"Inconsolada"'],
    },
    colors: {
      'schedir-blue': '#081221',
      'schedir-white': '#E0E0E0',
      'schedir-pink': '#BF9B9B',
      'schedir-red': '#970C11',
      'schedir-red2': '#764248',
      'schedir-green': '#8BE8CB',
      'schedir-lavander': '#7C7287',
      'schedir-yell': '#FFB30F',
      'schedir-yell2': '#F4D58D',

    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
  },
  plugins: [],
}
