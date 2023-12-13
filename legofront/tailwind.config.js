/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#1F314F",
        lightdarkslateblue: "#2A426C",
        darkslategrey: "#2F4F39",
        lightslategrey: "#406c4e",
        superlightgreen: "#62A678",
        stormsinparis: "#2F454F",
      },
    },
  },
  plugins: [],
};
