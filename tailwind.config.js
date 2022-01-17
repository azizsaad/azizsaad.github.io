module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"]
      },
      colors: {
        'darkGreen': '#0B5563'
      },
      maxWidth: {
        'mob': '18rem'
      },
      margin: {
        '18': '4.5rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};