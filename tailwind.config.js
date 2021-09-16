const { configureColors } = require('tailwindcss-color-suite')

module.exports = {
  purge: [
		'./index.html',
		'./src/**/*.{js,ts,vue}',
	],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: configureColors(),
    extend: {
			fill: (theme) => theme('colors')
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gridlines')
  ],
}
