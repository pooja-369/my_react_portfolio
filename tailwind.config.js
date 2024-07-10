/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '100% 50%',
      },
      translate: {
        '85p': '85%',
        '60p': '60%',
      },
      // animation: {
      //   'bounce-slow': 'bounce 8s infinite',
      //   'bounce-fast': 'bounce 0.5s infinite',
      // },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7%)' }, // Adjust -100% to your desired bounce height
        },
      },
      animation: {
        'bounce-custom': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}