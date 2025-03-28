/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        preahvihear: ['Preahvihear', 'sans-serif'],
      },
      colors: {
        darkPurple: '#7127BA',
      },
    },
  },
  plugins: [tailwindScrollbar],
}
