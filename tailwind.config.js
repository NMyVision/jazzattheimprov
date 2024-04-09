import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
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
        indigo: {
          1000: '#06050f'
        }
      }
    },
  },
  plugins: [],
}

