/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-purple-200": "#9f23fe",
        "custom-purple-500": "#9c76f5",
        "custom-purple-700": "#7758bf",
      },
      spacing: {
        "column": "500px",
      }
    },
  },
  plugins: [],
}
