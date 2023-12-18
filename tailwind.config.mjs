/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
    daisyui: {
        themes: ['dark', 'sunset'],
    },
	plugins: [
        require('daisyui'),
    ],
}
