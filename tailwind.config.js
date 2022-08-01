module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '10px'],
      },
      colors: {
        secondary: {
          600: '#ffdb85',
        },
        blue: {
          75: '#F7F9FA',
        },
        zinc: {
          450: '#828282',
        },
        primary: {
          600: '#2F5C6E',
          700: '#2A505F',
        },
        text: {
          500: '#828282',
          600: '#4F4F4F',
          800: '#333333',
        },
      },
    },
  },
  plugins: [],
}
