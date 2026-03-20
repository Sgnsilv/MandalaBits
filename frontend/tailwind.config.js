/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#f8f9fd',
        'surface-container': '#eaeef4',
        'surface-container-low': '#f1f4f9',
        'surface-container-lowest': '#ffffff',
        'primary': '#22648e',
        'primary-dim': '#0e5881',
        'primary-fixed': '#95cfff',
        'on-surface': '#2d3339',
        'outline-variant': '#acb3ba'
      },
      fontFamily: {
        'serif': ['Newsreader', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}