/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-default": "#1A4262",
        "primary-light": "#007DBC",
        "primary-dark": "#031C2D",
        "secondary-default": "#4C9651",
        "third-default": "#0B75C1",
        "fourth-default": "#FA575D",
        "fifth-default": "#D9D9D9"
      }
    },
  },
  plugins: [],
}
