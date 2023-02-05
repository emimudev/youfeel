
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '380px',
      ...defaultTheme.screens
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
