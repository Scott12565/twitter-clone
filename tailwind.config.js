/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'orangered',
        secondary: {
          100: 'red',
          200: 'green'
        }
      },

      fontSize: {
        normal: '1.28rem'
      }
    },
  },
  plugins: [],
}

