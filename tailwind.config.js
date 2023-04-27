/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#3FCC73",
        "custom-dark-green": "#298f4f",
        "custom-white": "#eee",
        "custom-black": "#111",
        "custom-red": "#ee5b51",
      },
    },
  },
  plugins: [],
};
