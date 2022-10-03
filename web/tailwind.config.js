// @type {import('tailwindcss').Config} 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1200px',
    },
    fontFamily: {
      'title-font': ['Poppins', 'sans-serif'],
      'body-font': ['DM sans', 'sans-serif'],
    },
    fontSize: {
      'title-font-size': ['1.875rem'],
      'subtitle-font-size': ['1rem'],
    },
    borderRadius: {
      'borderCard': ['0.25rem 0.25rem 0 0'],
    },
    extend: {
      colors: {
        'title-color': '#44cd5e',
        'base-color': '#BB32A1',
        'base-color-alt': '#F9557B',
        'text-color': '#757575',
        'text-color-light': '#fafafa',
        'background-color': '#111111',
      },
      padding: {
        '--header-height': '4.5rem',
      },
    },
    boxShadow: {
      'boxShadow': '0px 0px 12px rgb(0 0 0 / 80%);'
    },
  },
  plugins: [],
}
