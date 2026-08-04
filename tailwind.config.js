/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#038F48",
          "green-hover": "#027339",
          navy: "#2710A6",
          "navy-dark": "#1b0b7a",
          gray: "#CDC7D5",
          "gray-light": "#F7F6F9",
        }
      }
    },
  },
  plugins: [],
}
