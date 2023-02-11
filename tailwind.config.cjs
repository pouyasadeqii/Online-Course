/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#F25C54",
        "primary": "#F5F5F5",
        "secondary": "#FFFFFF",
        "mygray": "#707070",
        "myblack": "#2A2A2A",
        "gradient": "rgba(242, 92, 84, 0.93)",
        "post": "#e9e9e9",
        "green01": "#00a946",
        "green02": "#468F7D",
      },
      screens: {
        'xs': '550px',
      },
    },
    
  },
  plugins: [],
}