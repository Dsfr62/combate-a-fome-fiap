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
        "primary-default": "#2F8B0C",
        "primary-dark": "#256e0a",
        "secondary-default": "#FA575D",
        "secondary-dark": "#DC4B4B",
        "third-default": "#ECECEC",
      }
    },
  },
  plugins: [],
}
