/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ All your components
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        card: '#151515',
        primary: '#00FF41',
        secondary: '#7FB77E',
        accent: '#FF6F61',
        border: '#2C2C2C',
        linkHover: '#39FF14',
        hover:'#39FF14',
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
