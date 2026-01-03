/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        evergreen: '#002400',
        'black-forest': '#273B09',
        'olive-leaf': '#58641D',
        'palm-leaf': '#7B904B',
        lavender: '#DBD2E0',
      },
    },
  },
  plugins: [],
}
