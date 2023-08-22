/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "Open_Sans": ["Open Sans", "sans-serif"], //fuente para usar en tailwind
    },
  },
  plugins: [],
  base: "http://castilloxavie.github.io/API-user",
}

