const { tailwindColors } = require('tailwindcss-color-suite')

module.exports = {
  content: [
		'./index.html',
		'./src/**/*.{js,ts,vue}',
	],
  theme: {
    colors: tailwindColors(require('./colors.config')),
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
