/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      width: {
        '1/7': '45%',
        '1/8': '24%',
        '1/5':'32%',
      },
      height:{
        'h-120': '600px',
      },
      width:{
        'w-120':'420px',
      },

      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors:{
      'primary':'#9FD62E',
      'secondary':'#1F232E',
      'secondary-light':'#222222',
      },
    },
  },
  plugins: [],
}
