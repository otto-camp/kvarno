const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  mode: 'jit',
  darkMode: 'media',
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
