// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-gray': '#6C757D', // Example color code for slate gray
        'coral-red': '#FF4040', // Example color code for coral red
      },
      fontFamily: {
        'palanquin': ['Palanquin', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
