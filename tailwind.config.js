/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-pic": "url('./book/cover.jpg')", // Adjust the path to match your image
      },
    },
  },
  plugins: [],
};
