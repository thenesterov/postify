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
          100: '#9A8C84',
          200: '#918178',
          300: '#87776E',
          400: '#7B6D65',
          500: '#70635C',
          600: '#655953',
          700: '#5A4F49',
          800: '#4F4540',
          900: '#433B37',
          1000: '#38312E',
          1100: '#262220',
          1200: '#221E1C',
        },
        'flash': {
          100: '#F4DDCD',
          200: '#F0D2BC',
          300: '#EDC7AB',
          400: '#E9BB9B',
          500: '#E3AA81',
          600: '#E2A579',
          700: '#DE9968',
          800: '#DA8E58',
          900: '#D78347'
        },
        'neutral': {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#B8B8B8',
          500: '#A3A3A3',
          600: '#8F8F8F',
          700: '#7A7A7A',
          800: '#666666',
          900: '#525252',
          1000: '#3A3A3A',
          1100: '#292929',
          1200: '#141414'
        },
        'info-bg': {
          100: '#F4F5F5',
          200: '#DFE2E2',
          300: '#C9CECF',
          400: '#B4BABB',
          500: '#9FA6A8',
          600: '#899294',
          700: '#747E81',
          800: '#61696B',
          900: '#4E5456',
          1000: '#373C3D',
          1100: '#272A2B',
          1200: '#1D2020'
        },
        'info-text': {
          100: '#EEF9FB',
          200: '#CDEEF4',
          300: '#ABE2ED',
          400: '#81D3E3',
          500: '#68CADE',
          600: '#47BFD7',
          700: '#2CAFC9',
          800: '#2592A7',
          900: '#1D7486'
        },
        'success-bg': {
          100: '#F4F5F4',
          200: '#DFE2DF',
          300: '#C9CFCA',
          400: '#B4BBB5',
          500: '#9FA8A0',
          600: '#89948B',
          700: '#748176',
          800: '#616B62',
          900: '#4E564F',
          1000: '#373D38',
          1100: '#272B27',
          1200: '#1D201E'
        },
        'success-text': {
          100: '#EEFBF0',
          200: '#CDF4D3',
          300: '#ABEDB6',
          400: '#81E391',
          500: '#68DE7C',
          600: '#47D75F',
          700: '#2CC946',
          800: '#25A73A',
          900: '#1D862F'
        },
        'warn-bg': {
          100: '#F5F5F4',
          200: '#E2E2DF',
          300: '#CFCFC9',
          400: '#BBBBB4',
          500: '#A8A89F',
          600: '#949489',
          700: '#818174',
          800: '#6B6B61',
          900: '#56564E',
          1000: '#3D3D37',
          1100: '#2B2B27',
          1200: '#20201D'
        },
        'warn-text': {
          100: '#FBFBEE',
          200: '#F4F4CD',
          300: '#EDEDAB',
          400: '#E3E381',
          500: '#DEDE68',
          600: '#D7D747',
          700: '#C9C92C',
          800: '#A7A725',
          900: '#86861D'
        },
        'error-bg': {
          100: '#F5F4F4',
          200: '#E2DFDF',
          300: '#CFC9C9',
          400: '#BBB4B4',
          500: '#A89F9F',
          600: '#948989',
          700: '#817474',
          800: '#6B6161',
          900: '#564E4E',
          1000: '#3D3737',
          1100: '#2B2727',
          1200: '#201D1D'
        },
        'error-text': {
          100: '#FBEEEE',
          200: '#F4CDCD',
          300: '#EDABAB',
          400: '#E38181',
          500: '#DE6868',
          600: '#D74747',
          700: '#C92C2C',
          800: '#A72525',
          900: '#861D1D'
        }
      },
    },
    plugins: [],
  }
}