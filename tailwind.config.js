module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '10px'],
      },
      colors: {
        yellow: {
          350: '#FDD835',
        },
        blue: {
          75: '#F7F9FA',
        },
        zinc: {
          450: '#828282',
        },
        primary: {
          600: '#2F5C6E',
          700: '#254958',
        },
        text: {
          600: '#4F4F4F',
        },
      },
    },
  },
  plugins: [],
}
