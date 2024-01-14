import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gold: '#88714d'
      },
      animation: {
        'fade-in': 'fade-in 3s linear',
        'slow-fade-in': 'fade-out 5s linear',
        'fade-out': 'fade-out 3s linear',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 }, '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1 }, '100%': { opacity: 0.2 }
        }
      }
    }
  },
  plugins: [],
}

