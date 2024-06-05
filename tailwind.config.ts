import { type Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
	},
	plugins: [
		typographyPlugin
	],
	
} satisfies Config
