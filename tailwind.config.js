/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary-default": "#232e3f",
        "primary-light": "#e4c052",
        "primary-dark": "#031C2D",
        "secondary-default": "#4C9651",
        "third-default": "#0B75C1",
        "fourth-default": "#FA575D",
        "fifth-default": "#D9D9D9",
      },
      backgroundImage: {
        "img-ml5": "url('../public/img/img-negocios-febracis.webp')",
      },
    },
  },
  plugins: [],
});
