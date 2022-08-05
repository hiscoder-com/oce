module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '10px'],
      },
      colors: {
        secondary: {
          400: '#ffdb85',
        },
        primary: {
          100: '#F7F9FA',
          500: '#2F80ED',
          600: '#2F5C6E',
          700: '#2A505F',
        },
        text: {
          200: '#F2F2F2',
          250: '#EDEDEB',
          500: '#828282',
          600: '#4F4F4F',
          800: '#333333',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
