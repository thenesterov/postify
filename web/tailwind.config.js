/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lodge': {
          100: '#262721',
          200: '#3C3D37',
          300: '#52534D'
        },
        'flash': '#E3AA81',
        'reflection': '#F3D9C7'
      },
    },
    plugins: [],
  }
}