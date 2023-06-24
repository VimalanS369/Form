/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: '#AA14F0',
      secondary: '#BC8CF2',
      background: '#EEE',
      text: '#000',
    },},
  },
  plugins: [],
}

