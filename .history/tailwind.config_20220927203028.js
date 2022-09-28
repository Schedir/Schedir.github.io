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
    },
    colors: {
      'schedir-blue': '#081221',
      'schedir-WHITE': '#081221',
      'schedir-red': '#764248',
      'schedir-oran': '#F0A202',
      'schedir-green': '#8BE8CB',
      'schedir-lavander': '#7C7287',
    },
  },
  },
  plugins: [],
}
