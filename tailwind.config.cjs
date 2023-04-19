/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		  primary: {
			light: '#E7E2F8',
			DEFAULT: '#BB89EC',
			dark:'#690FAD',
		  },
		  secondary: {
			light: '#688900',
			DEFAULT: '#CFD700',
		  },
		}
	},
	plugins: [],
}
