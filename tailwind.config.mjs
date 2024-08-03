/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      }
    }
  },
  plugins: []
}
