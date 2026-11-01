/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { xs: '420px' },
    extend: {
      colors: {
        forest: '#12382C',
        emerald: '#28634B',
        parchment: '#F4EBDD',
        tomato: '#BF5A50',
        peach: '#E7B99D',
        ink: '#202421',
        lantern: '#E8BB78'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        mono: ['"DM Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
