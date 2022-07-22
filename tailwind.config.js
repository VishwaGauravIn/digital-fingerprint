/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'malibu': {
          DEFAULT: '#6AB7FF',
          '50': '#F9FCFF',
          '100': '#E4F2FF',
          '200': '#BCDEFF',
          '300': '#93CBFF',
          '400': '#6AB7FF',
          '500': '#329CFF',
          '600': '#0081F9',
          '700': '#0064C1',
          '800': '#004789',
          '900': '#002A50'
        },
      },
    },
  },
  plugins: [],
};
