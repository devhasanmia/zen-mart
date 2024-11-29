/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zm-p': '#1bd3a2',
        'zm-p-h': '#0fe9af',
      },
    },
  },
  plugins: [],
}