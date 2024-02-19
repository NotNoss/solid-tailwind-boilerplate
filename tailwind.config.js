/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#282c34',
        'link': '#b318f0',
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      },
      spacing: {
        'logo': '40vmin',
      },
      fontSize: {
        'lg': 'calc(10px + 2vmin)',
      }
    },
  },
  plugins: [],
}

