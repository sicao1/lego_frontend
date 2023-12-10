/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#1F314F",
        lightdarkslateblue: "#2A426C",
      },
    },
  },
  plugins: [],
};
