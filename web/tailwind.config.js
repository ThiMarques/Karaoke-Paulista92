// @type {import('tailwindcss').Config} 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-color': '#44cd5e',
        'base-color': '#BB32A1',
        'text-color': '#757575',
        'background-color': '#111111',
      },
    },
    boxShadow: {
      'boxShadow': '0px 0px 12px rgb(0 0 0 / 80%);'
    },
  },
  plugins: [],
}
