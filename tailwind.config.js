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
          green: "#026937",
          "green-hover": "#01532b",
          navy: "#0F2C59",
          "navy-dark": "#0A1E40",
          gray: "#CDC7D5",
          "gray-light": "#F7F6F9",
        }
      }
    },
  },
  plugins: [],
}